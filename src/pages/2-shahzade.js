import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import IntroImage from "../components/introimage"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Incurable Talents - 1. The Gokyo Ri" />
    <div
      style={{
        background: `lightGray`,
        marginLeft: `-20px`,
        marginRight: `-20px`,
        marginBottom: `20px`,
      }}
    >
      <IntroImage />
    </div>
    <h1>2. Shahzade</h1>
    <h2>Elsavere</h2>
    <p>
      “I hope your brother knows what he’s doing, captain,” said the crown
      prince, by way of greeting.
    </p>
    <p>
      Elsavere lowered his salute and fell into step beside the man, biting his
      tongue to keep from responding. They weren’t boys anymore, after all, and
      ever since the prince’s engagement ceremony last month, he’d been feeling
      the pressure to act more like a future king, and less like a twenty year
      old boy. It put him on edge, second guessing everyone, and everything.
    </p>
    <p>
      “Unless you have someone else in mind,” said Elsavere mildly. This earned
      him a glare, but only for a moment as the prince soon turned away to
      navigate the wide steps leading down to the promenade.
    </p>
    <p>
      “I’ve half a mind to cross the Natans Sea myself.” From this spot of the
      Royal Palace, they could see everything. Pink and white rays of dawn were
      beginning to break over the city below, outlining craggly rooflines that
      were carved right into the mountainside. A network of winding stone
      streets connected the city to the Palace, following on a gently sloping
      hill of waving grass and gardens.
    </p>
    <p>Elsavere had grown up here since he was a boy.</p>

    {/* The image component thingy */}
    <div
      style={{
        background: `lightGray`,
        marginLeft: `-20px`,
        marginRight: `-20px`,
        marginBottom: `20px`,
      }}
    >
      <Image />
    </div>

    <p>
      Downstairs, it was frigid and silent as a crypt, pale streaks of dust
      hanging still in the morning light. Two men that Aubry had never seen
      before were standing in the cramped living room, heavy cloaks trimmed in
      fur hanging off their shoulders. The house was so small that walking past
      them would have been impossible, so she cleared her throat and said,
      “Least its not snowing.”
    </p>
    <p>
      One of them gave a small half-smile, picking his teeth with a bit of bone.
      They looked to be in their early thirties, and wore heavy velvet cloaks
      lined with blond fur and shiny black riding boots, much more expensive
      than what anyone wore around here. Her eyes lingered on a set of fine
      silver spurs, inlaid with small blue crystals.
    </p>
    <p>“You’re Astly’s kid, right? Audry?”</p>
    <p>
      “Aubry,” she corrected, but before he could respond there was a loud bang
      from somewhere outside that made them all exchange glances.
    </p>
    <p>The younger of the two men shrugged, rubbing his gloves together.</p>
    <p>“Yore dad’s been out back half the mornin.”</p>
    <p>
      “Probably tacking up,” Aubry murmured, before unhooking a series of metal
      chains and locks running along a heavy wooden door.
    </p>
    <p>
      Aubry had to heave the door open with both hands for it to break free of
      the ice. Outside, the world was completely white for several moments,
      until the jagged outline of the Black Forest broke through the mist. Her
      first breath of air was so cold that a searing pain spread through her
      lungs, making her cough and pull a cloth bandana over her nose.
    </p>

    {/* The image component thingy */}
    <div
      style={{
        background: `lightGray`,
        marginLeft: `-20px`,
        marginRight: `-20px`,
        marginBottom: `20px`,
      }}
    >
      <Image />
    </div>
    <p>
      It’d snowed overnight, making the trek around the backside of their house
      particularly difficult. Even wearing snow boots, her feet easily went
      ankle-deep through the snow. She was panting by the time she found her
      father, who was throwing a heavy bag of grain into the back of a wooden
      sleigh.
    </p>
    <p>“Are the lordlings with ya?” he said, without looking up.</p>
    <p>“No.”</p>
    <p>
      Aubry jumped onto the side of the sleigh to get a better look at the
      supplies. Grain and grass cubes for the markhorein, a few cans of beans
      and bacon rashers, rolls of stretched buffalo hide and wolf furs.
    </p>
    <p>
      Her fathers sweaty face appeared from behind the sleigh for a moment. He
      had jet black hair and a graying beard, but had never lost the muscle from
      his youth. Spending most of his time hunting or guiding traders through
      the treacherous Tian Ma kept them both as lean and wiry as greyhounds.
    </p>
    <p>
      “Tellin ya truthfully, I don’t think they’ll make it as far as the pass,”
      he frowned, but there was a touch of amusement in his voice.
    </p>
    <p>“Where do they want to go?”</p>
    <p>“The Gokyo Ri.”</p>
    <p>
      “Oh,” said Aubry, the surprise in her voice obvious. A frigid gust of air
      blew past, breaking the silence with a howl. “Why? How do they even know
      about that place?”
    </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
