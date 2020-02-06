// Forked from https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-plugin-google-analytics
/* eslint-disable */

import React from "react"
import PropTypes from "prop-types"

export default function OutboundLink({eventLabel, ...props}) {
  return (
    <a
      {...props}
      onClick={e => {
        if (typeof props.onClick === `function`) {
          props.onClick()
        }
        let redirect = true
        if (
          e.button !== 0 ||
          e.altKey ||
          e.ctrlKey ||
          e.metaKey ||
          e.shiftKey ||
          e.defaultPrevented
        ) {
          redirect = false
        }
        if (props.target && props.target.toLowerCase() !== `_self`) {
          redirect = false
        }

        const args = [`send`, `event`, {
          eventCategory: `Outbound Link`,
          eventAction: `click`,
          eventLabel: typeof eventLabel === "string"
            ? eventLabel
            : eventLabel(props.href),
          transport: redirect ? `beacon` : ``,
          hitCallback: function() {
            if (redirect) {
              document.location = props.href
            }
          },
        }];

        if (window.ga) {
          window.ga(...args);
        } else {
          console.log('window.ga', ...args);
          if (redirect) {
            document.location = props.href
          }
        }

        return false
      }}
    />
  )
}

OutboundLink.defaultProps = {
  eventLabel: href => href
};

OutboundLink.propTypes = {
  href: PropTypes.string,
  eventLabel: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func
  ]).isRequired,
  target: PropTypes.string,
  onClick: PropTypes.func,
};
