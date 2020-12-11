import React, { Component } from 'react';
// import React, { useState, useEffect } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./Pages/Home";
import Chapters from "./Pages/Chapters";
import Container from "./Component/Container";
import ChapterNav from "./Component/StickyHeader";

class App extends Component {

  constructor(props) {
    super(props);
    const path = window.location.pathname;
    let currentChapter;

    if (path === "/limb") {
      currentChapter = this.chapterPage('limb');
      this.state = {
        chapter: currentChapter
      }
    }
    else if (path === "/chair") {
      currentChapter = this.chapterPage('chair');
      this.state = {
        chapter: currentChapter
      }
    }
    else if (path === "/room") {
      currentChapter = this.chapterPage('room');
      this.state = {
        chapter: currentChapter
      }
    }
    else if (path === "/street") {
      currentChapter = this.chapterPage('street');
      this.state = {
        chapter: currentChapter
      }
    }
    else if (path === "/clock") {
      currentChapter = this.chapterPage('clock');
      this.state = {
        chapter: currentChapter
      }
    }
  };

  chapterPage = (chapter) => {
    const limb = {
      page: 'limb',
      p1: {
        title: "Limb.",
        text: "Cyborg arms vs. zip ties: Finding the body's infinite adaptability and replacing the things that matter",
      },
      p2: {
        title: "War and Honor",
        text: "When more than twenty thousand Union amputees returned from the Civil War, prosthetics were made available to them for free. However, many opted out since the culturally a scar, a limp, or an empty sleeve became a way to announce a legacy of heroism. In 1945, prosthetics and rehabilitation became the \"social engineering of the future.\" Prosthetics became a symbol to fix injury, identity, and culture.",
      },
      p3: {
        title: "Evolution of Prosthetics",
        text: "From a mechanical limb extension, anchored in a harness, with a double-hook hand at the end that opens and closes online with a shoulder shrug, prosthetics have made an impressive leap in engineering and a similar leap in expense. Myoelectrics create a more realistic and fluid motion for artificial limbs. A myoelectric model creates motion by the electrical signals naturally build into the body's muscles.",
      },
      p4: {
        title: "Cyborg",
        text1: "With the evolution of prosthetic technology, those with these high-tech prosthetics are seen as cyborgs – flesh and automated systems operating together. However, these newer prosthetics are more evidence of an endlessly plastic and adaptive human body. The prosthetics is only a portion of who the person is. These objects are but an extension of the body that reflects the material culture and its relationship with the external world. Amputees are not half-human hybrids; they are people.",
      },
      p5: {
        title: "Seeing Disabilities",
        text: "Disabilities are not fixed or permanent labels that belong to a small group of people. We all will experience disabilities. Prosthetics can be seen as a way amputees re-build themselves or, through a use-centered lens, it can recast the meaning of the wonders of human adaptation. May you take the invitation to consider your own extended body with the recognition that the same assemblage is happening for all of us. How our bodies sense and move and think is intertwined with the way we meet the built world.",
      },
      p6: {
        title: "Adapting Bodies",
        text: "While culture may believe that prosthetics give identity and mobility back to the disabled, our bodies have the ability to outpace the purpose of technology. Has humans, we have learned to augment everyday tasks with simple everyday tools. Any of a human's hundred daily motor-driven tasks are made up of macro and micro-movements that have become automatic. However, they can also be adjusted. The body and the person are the site of infinite adaptation and expand the definition of technology in how it encompasses how bodies meet the work or tool and spaces to live life."
      }
    }

    const chair = {
      page: 'chair',
      p1: {
        title: "Chair.",
        text: "From \"do-it-yourself murder\" to cardboard furniture: Is a better world designed one-for-all, or all-for-one?",
      },
      p2: {
        title: "Do-It-Yourself Murder",
        text: "Sitting was never designed for the human body. The chair has less to do with biology, physiology, or autonomy and more with pharaohs, kinds, and executives. The historical chair was an expression of status and rank with a structure that puts a body higher than other individuals. However, these poorly designed chairs have become \"do-it-yourself murder.\" They are not a response to our bodies' realities nor its natural evolution; chairs are shroud design – a preoccupation with the way things look on the outside, at the expense of function and sustainability.",
      },
      p3: {
        title: "Building for the User",
        text: "The job of a product is to transform one's environment and tools, and by extension, one's self. When a design is just created to be created, all they do is create misfit conditions. The bodiedness of people get lost even though we think that our bodies all work the same. If we design for the \"seemingly little minorities\" like older people, people with disabilities, or any population considered beyond the middling mainstream, we would have designed for the majority.",
      },
      p4: {
        title: "Carboard",
        text1: "Cardboard is more than just a good material. It's a kind of philosophy. Cardboard can be seen as first-draft material but has the affordances to be a finished product. Cardboard has an experimental spirit but offers sturdy strength. When three layers are stacked together, corrugated in between in a wavelike formation, its structure becomes strong enough to hold up to 1,100 pounds per square inch. This material is a cheap and strong material that allows for creating bespoke and custom products for individual people.",
      },
      p5: {
        title: "Adaptive Design Association (ADA)",
        text: "Chairs and other household products can present clear areas of misfitting that show us how our bodies are really meeting the world. The Adaptive Design Association is a reminder that the built environment and all its structures are the product of human decisions. They are determined to alert everyone of how arbitrary the design of the built world is. The ADA founder, Alex Truesdall, wanted to see ways to better sculpt and customize the best chair for all bodies meeting the world. Their chairs for hundreds of children are all instances in which universalisms reveals its limitations and each an invitation to re-think mass production.",
      },
      p6: {
        title: "Leave the Average Behind",
        text: "When we co-design, designs as a result of a social process, we create products that are formed from when universal challenges are considered locally and unusually. We should believe that the right modification is out there and that the adaptive approach to design is infectious and consciousness-changing. There is no such thing as the average person, so how might design leave behind the average all together?"
      }
    }

    const room = {
      page: 'room',
      p1: {
        title: "Room.",
        text: "DeafSpace, a hospital dorm, and design that anticipates life's hardest choices. Re-thinking \"independent living.\"",
      },
      p2: {
        title: "360 Communication",
        text: "The act of signing is three-dimensional. Sign language emphasizes the visual nature or communication beyond just the words being shared. There is an increase of social awareness, not just for ones but for others, that is naturalized in the behavior with the social work of sign. Sign Language pushes us to consider how we move around our environment without stopping conversating because of the physical world. As people, we are spherical, so we should beautifully bear our deafness as the jumping-off point of how we re-build our world.",
      },
      p3: {
        title: "Material as an Extension of Our Somatic System",
        text: "Sound as a medium is one that is experienced by the deaf. It is deafness that produces a distinct sensory ecology. Materials can harness and amplify the tactility of acoustics. Wood reverberates when struck. Concrete and plastic absorb sound. Material can act as the extension of our senses. Sounds is multidimensional and multisensory because it is a wave. We can feel the energy of the space that goes beyond just listening.",
      },
      p4: {
        title: "DeafSpace",
        text1: "\"Dwelling\": a social triad made of people, one to another and in their environments. ",
        text2: "DeafSpace is architecture created by the invisible, beautiful, kinetic languages and behaviors of sign. These are spaces that maximized the sensory reach by extending the possibilities of a visual language. Rather than setting up a classroom with desks in rows facing the front of the class like a tennis match with a back-and-forth exchange, we can create a space that can easily be shifted and expanded to create shared interactions that multidimensional."
      },
      p5: {
        title: "Interdependence",
        text: "Independence is not the opposite of dependence, as dependence is a constant state of being human. To say we are independent is to say we are interdependent. However, to be interdependent, we must acknowledge our dependency. As humans, we ebb and flow into moments where we are dependent. As a society, we see dependency as an aspect we fear and loath because of its connection with disability. But disability may as well be a fundamental aspect of being human. From our infancy through the end of our lives, the fact of having a body we will all experience the universal experience of disability.",
      },
      p6: {
        title: "Can We Re-Think Our Structured World?",
        text: "When we think of a room, we think of an inert box or private place. But what if they were action settings – built places that arise from interactions, experience, and the physical features around us? Action settings can help us makes sense of how we behave in and use a space according to our bodies and abilities. Instead of describing our world in binary terms, we should reconsider our ideas of independence and find new ways of what it means to dwell."
      }
    }

    const street = {
      page: 'street',
      p1: {
        title: "Street.",
        text: "Geography and desire lines: Atypical minds and bodies navigate the landscape. Making space truly common.",
      },
      p2: {
        title: "What It Means to Be Human",
        text: "There are lots of ways to be human. To be autistic is to be alive and alter to the world in ways that are non-normative, pleasurable, challenging, adventurous, and all the world that describe life. In nature, biodiversity is praised for its strength in multiplicity. There is no such thing as an average human, as we should advocate seeing atypical minds and bodies as capable of making power contributions because of their ways of being.",
      },
      p3: {
        title: "Thick Injustice",
        text: "Inequities within urban structures that are \"deep and densely concentrated, as well as opaque and relatively intractable.\"",
      },
      p4: {
        title: "Sidewalks",
        text1: "The sidewalk stands for being in a public space; thus sidewalks pertain to the public sphere. People with disabilities saw the design of the streets as a part of their political rights—streets were initially built for working men with physically strong bodies with little to no caretaking responsibilities. However, in the 1960s, disability activists took to the streets by either mix concrete to create a smooth passage from the side to the street or smashed the concrete curb away to create a guerrilla-style cut. These acts were not just political statements, but people \"editing\" the city; they were not waiting for new architecture to be built, so they created a world that fit them by making and unmaking the inherent build world.",
      },
      p5: {
        title: "Structured Environment",
        text: "We navigate the built environment in hundreds of ways. We adjust our bodies to the space we inhabit and navigate based on what is there. Desire lines are indications of yearning, a path created by repetition and time. These desire lines are ways our bodies fight the misfits of the world until the built world catches up. They are a human choice, not only organized by efficiency but by desire. They are ways we can temporarily edit the shapes, sounds, and sight of the world that is the right mix for our bodies' individual affordances.",
      },
      p6: {
        title: "Building a More Porous World",
        text: "The problem with the built world is the staying power. We are designing our world to last, but if that world can't accommodate all humans, we need to consider a more porous environment. Big changes take small steps, public spectacles, testing, and patience. While our environment is not malleable, we as people are continuously making and remaking its passages and textures. \"Design includes unmaking and remaking with a combination of small gestures and big ideas,\" and the world needs to be designed with some porousness and flexibility around its edges."
      }
    }

    const clock = {
      page: 'clock',
      p1: {
        title: "Clocks.",
        text: "Life on crip time. When the clock is the keeper of our days, what pace of life is fast enough?",
      },
      p2: {
        title: "Our Bodies Are Not Average",
        text: "\"Average is the standard, but a body is not an average.\" As our bodies age, so does our speed and mobility. The time to cross the street was created with this kind of \"universal\" time in mind. Nevertheless, different types of people may need a different amount of time to cross. In New York, some crosswalks have increased their time permanently. In Singapore, they created a system that loosens the city's structure. Those needing extra time can tap their Green Man + (Plus) card against an electronic sensor, and additional time is added. Our bodies are all different, and urban design is slowly moving towards something that allows time to expand and contract on command.",
      },
      p3: {
        title: "Crip Time",
        text: "Disabilities and the concept of time are inseparable. 'Frequency,' 'incidence,' 'occurrence,' 'relapse,' 'remission' – all words frequently used when we talk about anything where our bodies deviate from the norm. Disabilities and illness have the power to extract itself from the linear idea of time. Crip Time is a name \"that disabled people have repurpose in the act of political reincarnation, dropping degradation attached to a word that was used to describe the past, cripple, and investing it with in-group pride.\" Crip time can also be seen as \"time travel,\" as it describes the out-of-sync plotting of life. This idea of time pushed us to think about why our bodies are tied to this concept of time.",
      },
      p4: {
        title: "Cultural Origins to Mathematical Units",
        text1: "Time was originally created to keep desirable life set apart by spiritual habits measured by marking the hours. \"The tools and technologies both follow, and lead, and follow again from the ideals that cultures value.\" The clock transformed from being a cultural core of marking the passing minutes to imagining time as preceding other metrics of life. It is the unit that drives how we perceive productivity, intellectuality, and disability.",
      },
      p5: {
        title: "What Does the Future Look Like?",
        text: "The words that led to \"disability\" has changed over time, but the essence has apparently been \"liberated from existence, [and] being from the descriptions of it.\" However, the history of intellectual disability has been informed by \"a history of condescension, suspicion, exclusion, and pity.\" There is a big story about the unfinished work of the built world we are all a part of. An invitation to life on crip time can call for a kind of freedom. It suggests that the clock is the culprit for the mismatch between those with disabilities and the world",
      },
      p6: {
        title: "How to Build the World for All of Us",
        text: " We need a world with \"a robust countervailing understanding of personhood and contribution and community in it, human values that are alive and operational outside the logic of market and its insistent clock.\" We should consider the possible design interventions that bridge the misfit between the body and the built world, not just through solutions that bring the body to become part of the norm. We need to co-create a way of life, of world-building. We should not see disabilities only as a problem to solve, but something that might \"engage our wonder, letting 'what if' questions grab and hold our attention for a moment, making us re-think what a body can do.\""
      }
    }

    switch (chapter) {
      case ("limb"):
        return limb;

      case ('chair'):
        return chair;

      case ('room'):
        return room;

      case ('street'):
        return street;

      case ('clock'):
        return clock;

      default:
        window.location.refresh()
    }
  }

  changeChapter = (chapter) => {
    let newChapter = this.chapterPage(chapter);
    this.setState({
      chapter: newChapter
    }, function () {
      // console.log(this.state.chapter)
    })
  }

  render = () => {
    const home = {
      p1: {
        title: "WHAT CAN A BODY DO?",
        subtitle: "How We Meet the Build World",
        p1: "How we meet the built environment depends on both bodies and worlds. The world is built for the average person, but we are not ordinary people. We have normalized the idea of an ideal body, and anything deviant of that is less than normal.",
        p2: "Disability results from the shape of the world's rigidly, lacking sense of what a body does or how it moves through the world. We see disability as moments when the body finds itself in \"misfit\" relationship to the world: a disharmony between the world and the body.",
        p3: "Disability as an experience can be the generative and restless vantage that offers everyone a wealth of undersetting of how we can form and re-form the very shapes of the contemporary world.",
        scroll: "SCROLL DOWN FOR MORE",
      },
      p2: {
        title1: "WHAT CAN",
        title2: "A BODY DO?",
        subTitle1: "How We",
        subTitle2: "Meet the",
        subTitle3: "Built World",
        chapterTitles: ["limb", "chair", "room", "street", "clock"]
      }
    }

    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Container>
              <Home home={home} changeChapter={this.changeChapter} />
            </Container>
          </Route>

          <Route path="/:chapter" render={(props) => {
            return (
              <div>

                <Container>
                  <ChapterNav changeChapter={this.changeChapter} />
                  <Chapters {...props} chapter={this.state.chapter} />
                </Container>
              </div>
            )
          }}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;