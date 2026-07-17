// content.js — source of truth for the Working Styles quiz.
// Edit freely. index.html reads from this file; no quiz copy lives in the code.
//
// SCORING: each answer contributes 1 point to exactly one archetype (V/O/C/S/F).
// The archetype with the most points wins. On a tie for first, the quiz asks the
// person to pick which of the tied archetypes sounds most like them, and shows
// both. Answer order is randomized on each question so no position is "the obvious one."

const QUIZ = {
  title: "How Do You Lead?",
  intro:
    "This quiz is a quick read on your working style where you'll be sorted into one of five archetypes. It takes about 5 minutes. Once you receive your result, check out details surrounding your archetype and then discuss in your breakout group.",

  // Archetype keys map to the letters in the source doc:
  // V = visionary, O = operator, C = catalyst, S = sharpener, F = finisher
  questions: [
    {
      id: "q1",
      text: "You do your best work when…",
      options: [
        { text: "I’m zoomed out, imagining where things could go.", scores: { visionary: 1 } },
        { text: "I’m heads-down in a structured, uninterrupted block.", scores: { operator: 1 } },
        { text: "I’m collaborating live, feeding off the room’s energy.", scores: { catalyst: 1 } },
        { text: "I’m wrestling with a genuinely hard problem.", scores: { sharpener: 1 } },
        { text: "The clock’s running and I’m driving to a deadline.", scores: { finisher: 1 } }
      ]
    },
    {
      id: "q2",
      text: "You get your energy at work from…",
      options: [
        { text: "Quiet time in my own head to think big.", scores: { visionary: 1 } },
        { text: "Bringing order to chaos (lists, plans, systems).", scores: { operator: 1 } },
        { text: "Being around people; the room recharges me.", scores: { catalyst: 1 } },
        { text: "A sharp, rigorous back-and-forth.", scores: { sharpener: 1 } },
        { text: "Momentum by crossing things off and moving fast.", scores: { finisher: 1 } }
      ]
    },
    {
      id: "q3",
      text: "A big, ambiguous new initiative just landed on your desk. Your first instinct is to…",
      options: [
        { text: "Zoom out: where could this take us, and why does it matter?", scores: { visionary: 1 } },
        { text: "Map it out: scope, owners, milestones, how it actually gets built.", scores: { operator: 1 } },
        { text: "Figure out who’s energized by this and pull the right people in.", scores: { catalyst: 1 } },
        { text: "Pressure-test the premise: is this even the right problem to solve?", scores: { sharpener: 1 } },
        { text: "Pick a direction and get us moving before we overthink it.", scores: { finisher: 1 } }
      ]
    },
    {
      id: "q4",
      text: "New information lands that challenges the current plan. You…",
      options: [
        { text: "Rethink the bigger picture: does our initial strategy still hold?", scores: { visionary: 1 } },
        { text: "Update the plan so everyone’s aligned on the new reality.", scores: { operator: 1 } },
        { text: "Check how it lands with the people affected and bring them along.", scores: { catalyst: 1 } },
        { text: "Dig in: where did this come from, and is it solid?", scores: { sharpener: 1 } },
        { text: "Adjust course fast and re-point the team.", scores: { finisher: 1 } }
      ]
    },
    {
      id: "q5",
      text: "When it comes to generating ideas, you’re at your best…",
      options: [
        { text: "Chasing the big “what if” and connecting dots others don’t.", scores: { visionary: 1 } },
        { text: "Turning raw ideas into a structure we can actually build.", scores: { operator: 1 } },
        { text: "In a group, where the room sparks off each other.", scores: { catalyst: 1 } },
        { text: "Alone first, poking holes until the strongest idea survives.", scores: { sharpener: 1 } },
        { text: "Converging fast on a call and naming who does what.", scores: { finisher: 1 } }
      ]
    },
    {
      id: "q6",
      text: "What does “non-9/9/6” done right look like for you? You’re the kind of person who…",
      options: [
        { text: "Does your best strategic thinking away from the desk (on a walk, etc.).", scores: { visionary: 1 } },
        { text: "Protects structured focus time and guards the calendar.", scores: { operator: 1 } },
        { text: "Looks out for the team’s energy, not just your own.", scores: { catalyst: 1 } },
        { text: "Keeps chewing on the hard problem off-hours because it’s nagging you.", scores: { sharpener: 1 } },
        { text: "Goes all-in in sprints, then deliberately resets.", scores: { finisher: 1 } }
      ]
    },
    {
      id: "q7",
      text: "Your gut definition of “done” is…",
      options: [
        { text: "It moved us toward the bigger vision.", scores: { visionary: 1 } },
        { text: "It’s documented, repeatable, and won’t break when I step away.", scores: { operator: 1 } },
        { text: "The team grew and can do it without me next time.", scores: { catalyst: 1 } },
        { text: "We learned something that makes the next version sharper.", scores: { sharpener: 1 } },
        { text: "We shipped and we’re already onto what’s next.", scores: { finisher: 1 } }
      ]
    },
    {
      id: "q8",
      text: "When a decision stalls, you’re the one who…",
      options: [
        { text: "Reframes it around the bigger goal we’re actually chasing.", scores: { visionary: 1 } },
        { text: "Lays out the options and tradeoffs on one page.", scores: { operator: 1 } },
        { text: "Reads the room and gets the holdouts genuinely on board.", scores: { catalyst: 1 } },
        { text: "Asks the question everyone’s been avoiding.", scores: { sharpener: 1 } },
        { text: "Calls it, so we stop circling.", scores: { finisher: 1 } }
      ]
    },
    {
      id: "q9",
      text: "Under real pressure, teammates count on you to…",
      options: [
        { text: "Keep sight of the big picture when everyone’s in the weeds.", scores: { visionary: 1 } },
        { text: "Hold the plan together so nothing falls through.", scores: { operator: 1 } },
        { text: "Keep the team’s energy and morale from cracking.", scores: { catalyst: 1 } },
        { text: "Keep us honest about what’s working and what isn’t.", scores: { sharpener: 1 } },
        { text: "Take the wheel and set the pace.", scores: { finisher: 1 } }
      ]
    },
    {
      id: "q10",
      text: "How you tend to GIVE feedback…",
      options: [
        { text: "I tie it to the bigger goal: is this moving us where we need to go?", scores: { visionary: 1 } },
        { text: "I make it clear, specific, and concrete.", scores: { operator: 1 } },
        { text: "I deliver it with care, in a way that keeps people motivated.", scores: { catalyst: 1 } },
        { text: "I’m direct and honest; candor beats comfort.", scores: { sharpener: 1 } },
        { text: "Fast and in the moment, then we keep moving.", scores: { finisher: 1 } }
      ]
    },
    {
      id: "q11",
      text: "The feedback you most want to RECEIVE is about…",
      options: [
        { text: "Whether my instincts and strategic bets were right.", scores: { visionary: 1 } },
        { text: "Whether my work was clear, thorough, and reliable.", scores: { operator: 1 } },
        { text: "Whether I brought the best out of the people around me.", scores: { catalyst: 1 } },
        { text: "Whether my thinking held up and my logic was sound.", scores: { sharpener: 1 } },
        { text: "Whether I moved fast enough and drove hard enough.", scores: { finisher: 1 } }
      ]
    },
    {
      id: "q12",
      text: "Your default management style is closest to…",
      options: [
        { text: "Point to the vision and let people find their own path.", scores: { visionary: 1 } },
        { text: "Set clear structure, roles, and expectations, then delegate.", scores: { operator: 1 } },
        { text: "Coach and develop people.", scores: { catalyst: 1 } },
        { text: "Raise the bar by challenging their thinking.", scores: { sharpener: 1 } },
        { text: "Lead by example and set the pace by doing.", scores: { finisher: 1 } }
      ]
    },
    {
      id: "q13",
      text: "When someone brings you a problem, you tend to…",
      options: [
        { text: "Zoom out and reframe what they’re really solving for.", scores: { visionary: 1 } },
        { text: "Help them break it into steps and structure.", scores: { operator: 1 } },
        { text: "Make sure they feel supported, then tackle it together.", scores: { catalyst: 1 } },
        { text: "Ask questions until we both understand it better.", scores: { sharpener: 1 } },
        { text: "Ask “what’s your plan?” and clear the path.", scores: { finisher: 1 } }
      ]
    },
    {
      id: "q14",
      text: "Your biggest work pet peeve is…",
      options: [
        { text: "Getting stuck in the weeds with no sense of the bigger why.", scores: { visionary: 1 } },
        { text: "Decisions made with no plan or record of why.", scores: { operator: 1 } },
        { text: "Talented people who feel unseen or underused.", scores: { catalyst: 1 } },
        { text: "Claims made without evidence or rigor.", scores: { sharpener: 1 } },
        { text: "Meetings that end with no clear owner or next step.", scores: { finisher: 1 } }
      ]
    },
    {
      id: "q15",
      text: "Which Grindr Mode pillar do you most identify with?",
      options: [
        { text: "Think Like an Owner", scores: { visionary: 1 } },
        { text: "Create Clarity & Operate Through Ambiguity", scores: { operator: 1 } },
        { text: "Unleash Your Potential", scores: { catalyst: 1 } },
        { text: "Learn Relentlessly", scores: { sharpener: 1 } },
        { text: "Embrace Being a Driver", scores: { finisher: 1 } }
      ]
    },
    {
      id: "q16",
      text: "If the team wrote one line about you, you’d want it to be…",
      options: [
        { text: "“They saw it before the rest of us did.”", scores: { visionary: 1 } },
        { text: "“Nothing fell through the cracks on their watch.”", scores: { operator: 1 } },
        { text: "“They made all of us better.”", scores: { catalyst: 1 } },
        { text: "“They made us think harder and better.”", scores: { sharpener: 1 } },
        { text: "“When they’re driving, we solve problems.”", scores: { finisher: 1 } }
      ]
    },
    {
      id: "q17",
      text: "Your relationship with risk is…",
      options: [
        { text: "I’ll take a big swing when the upside could be transformational.", scores: { visionary: 1 } },
        { text: "I’ll take calculated risks once I’ve mapped the downside.", scores: { operator: 1 } },
        { text: "I weigh how a risk lands on the people and the team.", scores: { catalyst: 1 } },
        { text: "I want the evidence before I’ll bet on it.", scores: { sharpener: 1 } },
        { text: "I’d rather move and adjust than wait for certainty.", scores: { finisher: 1 } }
      ]
    },
    {
      id: "q18",
      text: "In a room full of strong personalities, you’re usually the one…",
      options: [
        { text: "Steering the conversation toward the bigger idea.", scores: { visionary: 1 } },
        { text: "Tracking what was actually decided and who owns what.", scores: { operator: 1 } },
        { text: "Making sure every voice gets heard.", scores: { catalyst: 1 } },
        { text: "Probing and challenging the thinking.", scores: { sharpener: 1 } },
        { text: "Pushing us to land on a decision.", scores: { finisher: 1 } }
      ]
    }
  ],

  // The winning letter is hidden during the quiz and revealed only on the result screen.
  archetypes: {
    visionary: {
      name: "The Visionary",
      letter: "V",
      tagline: "Direction, strategy, seeing around corners.",
      description:
        "You think in strategy and possibility. You’re comfortable in ambiguity and set the “where” and “why” before others see it.",
      superpowers: [
        "Sees around corners and connects dots others miss.",
        "Comfortable operating in ambiguity and optionality.",
        "Frames the bigger picture that gives the work meaning."
      ],
      watchouts: [
        "Believes the details are something others need to execute.",
        "May chase the next big idea before finishing the last one."
      ],
      howToWorkWithMe: [
        "Connect my ideas back to the concrete next step.",
        "Tell me when I’m too far ahead of where the team actually is.",
        "Ground the vision with a “here’s what that means Monday morning.”"
      ],
      color: "#F5FF78"
    },
    operator: {
      name: "The Operator",
      letter: "O",
      tagline: "Systems, structure, reliable execution.",
      description:
        "You turn ideas into structure: the plan, the process, the machine everyone else runs on. Nothing falls through the cracks on your watch.",
      superpowers: [
        "Turns ambiguity into repeatable systems that scale.",
        "Reliable and details are handled.",
        "Creates clarity through plans and shared context."
      ],
      watchouts: [
        "Can over-index on process or wait for clarity that won’t come.",
        "May slow a fast-moving room that’s ready to act."
      ],
      howToWorkWithMe: [
        "Give me context and I’ll give you a structure.",
        "Tell me when “good enough and shipped” beats “perfect and documented.”",
        "Flag decisions clearly so I can capture them."
      ],
      color: "#7BD3FF"
    },
    catalyst: {
      name: "The Catalyst",
      letter: "C",
      tagline: "People, energy, momentum through others.",
      description:
        "You’re the heartbeat of the team. You read what people need, build trust, and get more out of the room than they knew they had.",
      superpowers: [
        "Draws out contribution and energy from everyone.",
        "Builds trust and rallies people around a goal.",
        "Coaches and connects rather than rescues."
      ],
      watchouts: [
        "Can avoid hard feedback to keep the peace.",
        "May over-index on harmony over speed or absorb others’ load."
      ],
      howToWorkWithMe: [
        "Be direct with me. I can take it and it helps me be direct back.",
        "Tell me when the team needs a decision more than a conversation.",
        "Don’t mistake my warmth for a lack of standards."
      ],
      color: "#FF9EC4"
    },
    sharpener: {
      name: "The Sharpener",
      letter: "S",
      tagline: "Rigor, debate, sharper thinking.",
      description:
        "You interrogate ideas and challenge assumptions. You make the work stronger by refusing to let weak thinking slide.",
      superpowers: [
        "Stress-tests ideas until the strongest one survives.",
        "Asks the question everyone else is avoiding.",
        "Grounds decisions in evidence and rigor."
      ],
      watchouts: [
        "Debate can read as combative, or run past the point of decision.",
        "May exhaust the room if you don’t signal when you’re aligned."
      ],
      howToWorkWithMe: [
        "Come with your reasoning, not just your conclusion.",
        "Push back on me too because I respect it.",
        "Once we’ve decided, I’m in; tell me if I’m relitigating."
      ],
      color: "#C6A8FF"
    },
    finisher: {
      name: "The Finisher",
      letter: "F",
      tagline: "Decisiveness, pace, driving to done.",
      description:
        "You create momentum and drive to the finish. You’d rather make a call and correct course than sit in ambiguity.",
      superpowers: [
        "Turns discussion into decisions and motion.",
        "Sets the pace and keeps the team moving.",
        "Owns the outcome, not just the task list."
      ],
      watchouts: [
        "Can call it before the room is aligned.",
        "May mistake speed for progress, or leave quieter voices behind."
      ],
      howToWorkWithMe: [
        "Bring me a plan, not just a problem.",
        "Tell me if I’m moving too fast to bring people with me.",
        "Don’t read my “let’s go” as a final decision unless I say so."
      ],
      color: "#FFB067"
    }
  }
};
