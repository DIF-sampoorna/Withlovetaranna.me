import React, { useState } from "react";
import { 
  ArrowLeft, Compass, Info, Calendar, Phone, Mail, MapPin, 
  Sparkles, BookOpen, Quote, MessageSquare, Eye, ChevronRight,
  ExternalLink, Check, Heart, Play, User, Volume2, Instagram, Youtube, Award, Sliders, RefreshCw
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface PlaceholderProps {
  view: string;
  onBack: () => void;
  onNavigate?: (view: string) => void;
}

export default function NavigationPlaceholder({ view, onBack, onNavigate }: PlaceholderProps) {
  // Modal state for Social Entrepreneur CTAs
  const [activeModal, setActiveModal] = useState<"partner" | "volunteer" | "donate" | null>(null);
  const [modalSuccess, setModalSuccess] = useState(false);
  const [donationAmount, setDonationAmount] = useState("1000");
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");

  // Interactive Poetry Anthology State
  const [selectedPoemId, setSelectedPoemId] = useState<string | null>(null);

  // Accordion state for Public Speaker
  const [openSpeakerTopic, setOpenSpeakerTopic] = useState<number | null>(0);

  // Booking speaker modal state
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [bookingDate, setBookingDate] = useState("2026-07-15");

  // Model Portfolio Zoom Modal
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);
  const [zoomedCaption, setZoomedCaption] = useState("");
  const [portfolioContrast, setPortfolioContrast] = useState(1.1);
  const [portfolioBrightness, setPortfolioBrightness] = useState(1.0);

  const handleImageClick = (imageSrc: string, caption: string) => {
    if (onNavigate) {
      onNavigate("gallery");
    } else {
      setZoomedImage(imageSrc);
      setZoomedCaption(caption);
    }
  };

  // Interactive Media Samples State for Public Speaker
  const [activeMediaTab, setActiveMediaTab] = useState<"youtube" | "instagram">("youtube");
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);
  const [videoProgress, setVideoProgress] = useState(0);
  const [currentSubtitle, setCurrentSubtitle] = useState("");
  const [playbackTime, setPlaybackTime] = useState(0);

  // Instagram states
  const [igLikes, setIgLikes] = useState<Record<string, number>>({
    "ig-monsoon": 4210,
    "ig-plus-size": 6842,
    "ig-adrak-chai": 3951
  });
  const [igHasLiked, setIgHasLiked] = useState<Record<string, boolean>>({});
  const [igComments, setIgComments] = useState<Record<string, Array<{ user: string; text: string }>>>({
    "ig-monsoon": [
      { user: "rhea_mumbai", text: "This is so beautifully put. Mumbai at 4am has a different soul entirely." },
      { user: "amit_sharma", text: "The concept of quiet inside is so true. Needed this reminder today." }
    ],
    "ig-plus-size": [
      { user: "priya.garg", text: "You are such an inspiration Taranna! Thank you for walking so boldly." },
      { user: "kabir_d", text: "All bodies are indeed great bodies! 👑" }
    ],
    "ig-adrak-chai": [
      { user: "nisha_reads", text: "A hot cup of adrak chai in the rain is therapeutic. Beautiful poetry." },
      { user: "siddharth_99", text: "Tactile joys are the realest joys." }
    ]
  });
  const [newCommentText, setNewCommentText] = useState<Record<string, string>>({});

  // Effect to handle fake video playback simulation
  React.useEffect(() => {
    let timer: any;
    if (playingVideoId) {
      // Subtitles mapping
      const subtitleMap: Record<string, Array<{ time: number; text: string }>> = {
        "yt-disliked": [
          { time: 0, text: "🎥 [AUDIO PREVIEW] \"We spend our entire lives managing other people's perceptions of us.\"" },
          { time: 4, text: "\"What if we just stopped and let them think what they want?\"" },
          { time: 8, text: "\"The moment you accept the freedom of being misunderstood...\"" },
          { time: 12, text: "\"...is the moment you actually start living on your own terms. Unapologetically.\"" }
        ],
        "yt-shame": [
          { time: 0, text: "🎥 [AUDIO PREVIEW] \"Shame dies when it is spoken in a room where people listen.\"" },
          { time: 4, text: "\"It thrives in the quiet, in the half-truths we keep telling ourselves.\"" },
          { time: 8, text: "\"But the moment you name it, you strip it of all its power.\"" },
          { time: 12, text: "\"So let's name it together. Let's make it speak, loud and clear.\"" }
        ],
        "yt-body": [
          { time: 0, text: "🎥 [AUDIO PREVIEW] \"Your body is not an ornament to look at; it is the home you live in.\"" },
          { time: 4, text: "\"It is the vessel that carries your laughter, your stories, your work.\"" },
          { time: 8, text: "\"We do not owe anyone a certain size to deserve space in a room.\"" },
          { time: 12, text: "\"Existing loudly is a form of celebration. Every body is a great body.\"" }
        ]
      };

      const selectedSubtitles = subtitleMap[playingVideoId] || [];

      // Set initial subtitle immediately
      if (selectedSubtitles.length > 0) {
        setCurrentSubtitle(selectedSubtitles[0].text);
      }

      timer = setInterval(() => {
        setPlaybackTime((prev) => {
          const nextTime = prev + 1;
          if (nextTime >= 16) {
            setPlayingVideoId(null);
            setVideoProgress(0);
            setCurrentSubtitle("");
            return 0;
          }
          setVideoProgress((nextTime / 16) * 100);
          
          const sub = [...selectedSubtitles]
            .reverse()
            .find((s) => nextTime >= s.time);
          if (sub) {
            setCurrentSubtitle(sub.text);
          }
          return nextTime;
        });
      }, 1000);
    } else {
      setPlaybackTime(0);
      setVideoProgress(0);
      setCurrentSubtitle("");
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [playingVideoId]);

  // Submission handler
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setModalSuccess(true);
    setTimeout(() => {
      setModalSuccess(false);
      setActiveModal(null);
      setFormName("");
      setFormEmail("");
    }, 2800);
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSuccess(true);
    setTimeout(() => {
      setBookingSuccess(false);
      setIsBookingOpen(false);
    }, 2800);
  };

  const handleLikeIgPost = (postId: string) => {
    const hasLiked = igHasLiked[postId];
    setIgHasLiked((prev) => ({
      ...prev,
      [postId]: !hasLiked
    }));
    setIgLikes((prev) => ({
      ...prev,
      [postId]: prev[postId] + (hasLiked ? -1 : 1)
    }));
  };

  const handleAddIgComment = (postId: string) => {
    const text = newCommentText[postId] || "";
    if (!text.trim()) return;

    setIgComments((prev) => ({
      ...prev,
      [postId]: [
        ...(prev[postId] || []),
        { user: "viewer_anonymous", text: text.trim() }
      ]
    }));

    setNewCommentText((prev) => ({
      ...prev,
      [postId]: ""
    }));
  };

  // Static/Interactive Anthology Data
  const POEMS = [
    {
      id: "yin-yang",
      title: "Yin and Yang",
      snippet: "A blessing built through repetition...",
      text: `I wish you adrak chai in the monsoon,
and a wool blanket that smells of yesterday's sun.
I wish you words that do not need to be explained,
and silences that feel like home.

I wish you the strength to break apart
so you may find how wide you can stretch.
I wish you the grace of water, flowing over stones,
and the stillness of the mountain at dusk.

I wish you… carrying the whole poem's rhythm.
Unmistakably, authentically yourself.`,
      vibe: "Warm / Rhythmic"
    },
    {
      id: "the-heart",
      title: "the heart",
      snippet: "Written from the perspective of a dying spouse...",
      text: `The machine next to me clicks like a clock.
You hold my hand, tracing the blue veins that have slowed.
Do not look for me only in quiet graves;
look for me in the warmth of the morning tea we shared,
in the laughter we left in Mumbai's dusty corners.

I am leaving my own point of view behind.
I am becoming the space between the notes of music you love.
Remember me as the fire that cannot be extinguished.`,
      vibe: "Confessional / Heavy"
    },
    {
      id: "loneliness",
      title: "Loneliness",
      snippet: "A heavy, unresolved gaze into distance...",
      text: `Mumbai is quietest at four in the morning.
The salt in the air is heavy, sticking to the window pane.
I make two cups of adrak chai,
knowing you are asleep four hundred miles away in Delhi.
The tea goes cold on the table.

We are close, yet we are so far away.
The ache in the body is just a map of where you are not.`,
      vibe: "Sensory / Blue"
    },
    {
      id: "39-beyond-here",
      title: "39. Beyond Here",
      snippet: "Sits in heavier, unresolved territory...",
      text: `We crossed the border on a Tuesday afternoon.
There were no signs, only the sudden turn of the trees.
You said, this is where we leave the shame behind.
We walked through four different rooms,
unguarded, looking for a place that didn't ask for permission to exist.

We have reached heights unknowingly,
becoming smooth and boundless like water.`,
      vibe: "Raw / Wit"
    },
    {
      id: "pani-puri",
      title: "Pani puri",
      snippet: "Pushes food-as-desire to its most playful extreme...",
      text: `The mint water is cold against the hot skin of the afternoon.
A single crunch.
The sudden, sharp burst of spice that makes you close your eyes.
It is sweet, it is burning, it is messy.

Just like the way you look at me across the table.
We do not speak,
we just swallow the longing, one bite at a time.`,
      vibe: "Playful / Tactile"
    },
    {
      id: "searching-home",
      title: "Searching for a home",
      snippet: "Built almost entirely out of the five senses...",
      text: `A sound like dry leaves scraping against cement.
The sharp smell of old yellowed paper and wet asphalt.
The touch of old teak wood that has survived fifty monsoon seasons.
The taste of salt on my tongue as the wind blows from the sea.

I am cataloging my world with precision.
I am finding that home is not a place with doors,
but the skin I live in.`,
      vibe: "Grounded / Senses"
    }
  ];

  // Speakers Topic accordion data
  const SPEAKER_TOPICS = [
    {
      title: "Shame and guilt — naming them instead of managing around them",
      desc: "Delving deep into the emotional blocks that society teaches us to swallow. Taranna discusses how raw confession and public naming dismantle the power of shame, inviting audiences to step into radical self-acceptance."
    },
    {
      title: "Rejection and difficult life experiences",
      desc: "An honest exploration of failures, career re-routes, and relational ruptures. Moving away from standard 'resilience' hype, she speaks on the quiet strength found in letting things break apart so they can expand."
    },
    {
      title: "Yoga, wellness, and mental health",
      desc: "Integrating somatic practices with modern mental health advocacy. How alignment of the physical body serves as a baseline for emotional recovery and personal truth."
    },
    {
      title: "Body positivity — 'all bodies are great bodies'",
      desc: "A direct challenge to systemic fatphobia and straight-size modeling standards. Taranna details the path from seeking external approval to existing loudly and joyfully."
    },
    {
      title: "Authenticity — living without fear or hesitation",
      desc: "A manifesto on self-trust. How to build independent systems of self-approval and survive in creative spaces without needing permission to belong."
    }
  ];

  // Campaign Gallery highlights
  const CAMPAIGNS = [
    { image: "/Modle.JPG.jpeg", caption: "Unbound Presence // Plus-Size Boldness", label: "Model" },
    { image: "/TD-297.jpg.jpeg", caption: "Textured Warmth // Modern Knitwear Poise", label: "Model" },
    { image: "/NOV00034.JPG.jpeg", caption: "Studio Amber Portrait // Warm-Toned Confidence", label: "Model" },
    { image: "/NOVA0019.JPG.jpeg", caption: "Soft Poise & Elegance // Representation Redefined", label: "Model" },
    { image: "/taranna.png", caption: "Cinematic Cover Silhouette // The Golden Gaze", label: "Editorial" },
    { image: "/TD-382.jpg.jpeg", caption: "Intense Sincerity // Editorial Poise", label: "Editorial" },
    { image: "/Speaker.JPG.jpeg", caption: "Sculpted Shadow-Play // Chiaroscuro Modeling", label: "Creative" },
    { image: "/Writer.jpg.jpeg", caption: "Contemplative Silence // Serene Studio Framing", label: "Creative" }
  ];

  // Render correct content
  const renderContent = () => {
    switch (view) {
      case "social-entrepreneur":
        return (
          <div className="flex flex-col gap-12 md:gap-20">
            {/* Hero Sub-branding */}
            <div className="border-l-4 border-[#0e5fa3] pl-6 py-2 max-w-xl">
              <span className="font-mono text-[10px] tracking-[0.3em] text-[#0e5fa3] font-bold block uppercase mb-1">
                PAGE 1 // SOCIAL ENTREPRENEUR
              </span>
              <h1 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 uppercase">
                Deepjyoti India Foundation
              </h1>
              <p className="font-display italic text-lg md:text-xl text-[#E65F1B] mt-2">
                Sampoorna — meaning "complete."
              </p>
            </div>

            {/* Split Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left Column: Intro & What we do */}
              <div className="lg:col-span-8 flex flex-col gap-10">
                <div className="prose prose-neutral max-w-none">
                  <p className="font-sans font-light text-base md:text-lg text-neutral-600 leading-relaxed mb-6">
                    Taranna Deepjyoti is the founder of Deepjyoti India Foundation, which runs its flagship initiative, Sampoorna, out of Mumbai. Registered under 12A and 80G, CSR-compliant, and recognized by NITI Aayog, the foundation was built on a simple belief: that empowerment isn't complete unless it addresses the whole person — their health, their confidence, and their sense of dignity, together.
                  </p>
                </div>

                {/* What Sampoorna Does */}
                <div className="flex flex-col gap-8">
                  <h2 className="font-heading text-xl md:text-2xl font-bold text-neutral-950 uppercase tracking-wider pb-3 border-b border-neutral-100 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 bg-[#0e5fa3] rounded-full" />
                    What Sampoorna Does
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="p-6 rounded-2xl bg-white border border-neutral-100 shadow-xs flex flex-col gap-3">
                      <div className="text-xl">👩‍🦰</div>
                      <h3 className="font-heading text-base font-bold text-neutral-900 uppercase">
                        Empowering Young Women
                      </h3>
                      <p className="font-sans text-xs md:text-sm text-neutral-500 leading-relaxed font-light">
                        At its core, Sampoorna works with young women to build mental health support and confidence into the same space — recognizing that self-worth and wellbeing aren't separate journeys. The goal isn't just intervention; it's helping women lead genuinely confident, fulfilling lives on their own terms.
                      </p>
                    </div>

                    <div className="p-6 rounded-2xl bg-white border border-neutral-100 shadow-xs flex flex-col gap-3">
                      <div className="text-xl">👴</div>
                      <h3 className="font-heading text-base font-bold text-neutral-900 uppercase">
                        Caring for Senior Citizens
                      </h3>
                      <p className="font-sans text-xs md:text-sm text-neutral-500 leading-relaxed font-light mb-2">
                        In 2024, Sampoorna expanded into elder care, launching regular health camps across old age homes in Guwahati, Assam. These camps bring qualified doctors in for essential checkups — but Sampoorna didn't stop at the clinical.
                      </p>
                      <div className="mt-auto p-3.5 bg-amber-50/50 rounded-xl border border-amber-100/60 flex flex-col gap-1.5">
                        <span className="font-mono text-[8px] tracking-widest text-[#c57d11] font-bold uppercase">SPECIAL PARTNERSHIP</span>
                        <p className="font-sans text-[11px] text-neutral-600 leading-relaxed">
                          Partnering with the Assam Clowning Academy, we introduced medical clowning therapy: a joyful, disarming way to ease loneliness.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 rounded-2xl bg-[#FCFAF6] border border-neutral-100 flex flex-col gap-3 mt-4">
                    <div className="flex items-center gap-2">
                      <Compass className="w-4 h-4 text-[#0e5fa3]" />
                      <h3 className="font-heading text-xs font-bold text-[#0e5fa3] tracking-widest uppercase">
                        Looking Ahead
                      </h3>
                    </div>
                    <p className="font-sans text-xs md:text-sm text-neutral-500 leading-relaxed font-light">
                      Sampoorna plans to make these health camps a monthly fixture, not a one-off — sustained care, not a single visit. Alongside this, the foundation remains committed to its founding focus: young women's mental health and confidence.
                    </p>
                  </div>

                  {/* Photo Documentation of DJIF / Sampoorna */}
                  <div className="flex flex-col gap-5 mt-8 p-6 bg-white border border-neutral-100 rounded-3xl shadow-xs">
                    <div>
                      <span className="font-mono text-[9px] tracking-widest text-[#0e5fa3] font-bold block uppercase mb-1">
                        FIELD ARCHIVE // DOCUMENTATION
                      </span>
                      <h3 className="font-heading text-lg font-bold text-neutral-900 uppercase">
                        Socio-Entrepreneurial Impact
                      </h3>
                      <p className="font-sans text-xs text-neutral-400 font-light mt-0.5">
                        Moments of active frontline leadership, bringing healthcare and mental health support camps across Northeast India. Click to view in Gallery.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2">
                      <div 
                        onClick={() => { handleImageClick("/TD-004.jpg.jpeg", "Empathetic frontline counseling session with women in regional centers."); }}
                        className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-neutral-150 border border-neutral-200/50 shadow-xs cursor-pointer"
                      >
                        <img src="/TD-004.jpg.jpeg" alt="Empowerment Camps" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                          <div className="flex flex-col">
                            <span className="text-white text-[10px] font-mono tracking-widest uppercase font-bold">Frontline Camp</span>
                            <span className="text-neutral-300 text-[8px] font-sans truncate mt-0.5">Assam Health Support</span>
                          </div>
                        </div>
                      </div>

                      <div 
                        onClick={() => { handleImageClick("/TD-263.jpg.jpeg", "Visionary healthcare and pediatric wellness support loop."); }}
                        className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-neutral-150 border border-neutral-200/50 shadow-xs cursor-pointer"
                      >
                        <img src="/TD-263.jpg.jpeg" alt="Wellness Loops" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                          <div className="flex flex-col">
                            <span className="text-white text-[10px] font-mono tracking-widest uppercase font-bold">Healthcare Loop</span>
                            <span className="text-neutral-300 text-[8px] font-sans truncate mt-0.5">Children & Elder Care</span>
                          </div>
                        </div>
                      </div>

                      <div 
                        onClick={() => { handleImageClick("/Speaker.JPG.jpeg", "Coordinating systemic aid and regional community development."); }}
                        className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-neutral-150 border border-neutral-200/50 shadow-xs cursor-pointer"
                      >
                        <img src="/Speaker.JPG.jpeg" alt="Coordination and Leadership" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                          <div className="flex flex-col">
                            <span className="text-white text-[10px] font-mono tracking-widest uppercase font-bold">Aid Coordination</span>
                            <span className="text-neutral-300 text-[8px] font-sans truncate mt-0.5">Deepjyoti Operations</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* In Her Own Words Pull Quote */}
                <div className="p-8 md:p-10 bg-neutral-900 rounded-3xl text-white relative overflow-hidden mt-8">
                  <div className="absolute top-6 right-8 text-neutral-800 font-serif text-8xl pointer-events-none select-none">
                    “
                  </div>
                  <span className="font-mono text-[9px] tracking-[0.25em] text-[#E65F1B] font-bold block mb-4 uppercase">
                    IN HER OWN WORDS
                  </span>
                  <blockquote className="font-display italic text-lg md:text-xl text-neutral-100 leading-relaxed mb-6">
                    "I started Deepjyoti India Foundation because I kept seeing the same gap — people being handed one piece of support when what they actually needed was all of it at once. Health without dignity isn't enough. Confidence without care isn't enough. Sampoorna means complete, and that's the point — showing up for the whole person, not just the part that's easiest to fix."
                  </blockquote>
                  <cite className="font-mono text-[9px] tracking-widest text-neutral-400 font-bold uppercase block not-italic">
                    — Taranna Deepjyoti, Founder
                  </cite>
                </div>
              </div>

              {/* Right Column: Get Involved Placeholder CTAs */}
              <div className="lg:col-span-4 lg:sticky lg:top-32 flex flex-col gap-6">
                <div className="p-6 bg-white border border-neutral-200/60 rounded-2xl shadow-sm flex flex-col gap-6">
                  <div>
                    <span className="font-mono text-[9px] tracking-widest font-bold text-[#0e5fa3] block uppercase mb-1">
                      GET INVOLVED
                    </span>
                    <h3 className="font-heading text-lg font-bold text-neutral-900">
                      Join Our Mission
                    </h3>
                    <p className="font-sans text-xs text-neutral-400 leading-relaxed mt-1 font-light">
                      We run on collective empathy. Pick an action below to participate in our active programs.
                    </p>
                  </div>

                  <div className="flex flex-col gap-3.5">
                    <button 
                      onClick={() => { setActiveModal("partner"); setModalSuccess(false); }}
                      className="w-full font-mono text-[10px] tracking-widest uppercase font-bold text-white bg-[#0e5fa3] hover:bg-[#0c4e85] px-5 py-4 rounded-xl shadow-xs transition-colors cursor-pointer flex items-center justify-between"
                    >
                      <span>Partner with us</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>

                    <button 
                      onClick={() => { setActiveModal("volunteer"); setModalSuccess(false); }}
                      className="w-full font-mono text-[10px] tracking-widest uppercase font-bold text-neutral-700 hover:text-neutral-900 bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 px-5 py-4 rounded-xl transition-colors cursor-pointer flex items-center justify-between"
                    >
                      <span>Volunteer</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>

                    <button 
                      onClick={() => { setActiveModal("donate"); setModalSuccess(false); }}
                      className="w-full font-mono text-[10px] tracking-widest uppercase font-bold text-[#E65F1B] hover:text-white bg-[#E65F1B]/10 hover:bg-[#E65F1B] border border-[#E65F1B]/35 px-5 py-4 rounded-xl transition-all cursor-pointer flex items-center justify-between"
                    >
                      <span>Donate</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  
                  <div className="pt-4 border-t border-neutral-100 flex flex-col gap-2">
                    <span className="font-mono text-[8px] tracking-widest text-neutral-400 font-bold block uppercase">FOUNDATION CREDENTIALS</span>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-0.5 bg-neutral-100 text-neutral-600 rounded font-mono text-[9px] font-bold">12A REGISTERED</span>
                      <span className="px-2 py-0.5 bg-neutral-100 text-neutral-600 rounded font-mono text-[9px] font-bold">80G COMPLIANT</span>
                      <span className="px-2 py-0.5 bg-neutral-100 text-neutral-600 rounded font-mono text-[9px] font-bold">NITI AAYOG</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "writer":
        return (
          <div className="flex flex-col gap-12 md:gap-20">
            {/* Hero Sub-branding */}
            <div className="border-l-4 border-[#E65F1B] pl-6 py-2 max-w-xl">
              <span className="font-mono text-[10px] tracking-[0.3em] text-[#E65F1B] font-bold block uppercase mb-1">
                PAGE 2 // WRITER
              </span>
              <h1 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 uppercase">
                Taranna, the Writer
              </h1>
              <p className="font-display italic text-lg md:text-xl text-[#0e5fa3] mt-2">
                Confessional. Sensory. Unguarded.
              </p>
            </div>

            {/* Split Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left Column: Intro & Style description */}
              <div className="lg:col-span-6 flex flex-col gap-10">
                <div className="p-6 bg-[#FCFAF6] border border-neutral-200/50 rounded-2xl">
                  <span className="font-mono text-[9px] tracking-widest text-[#E65F1B] font-bold block uppercase mb-3">
                    PERSONAL NARRATIVE
                  </span>
                  <p className="font-sans font-light text-base text-neutral-600 leading-relaxed mb-4">
                    I write mostly in free verse — confessional poetry that doesn't flinch. Longing, distance, grief, the ache of being close to someone and still far away, the cities that raised me — Mumbai and Delhi aren't just places I've lived, they're places I feel from.
                  </p>
                  <p className="font-sans font-light text-base text-neutral-600 leading-relaxed">
                    I ground everything in the physical. A bowl of maggi. Adrak chai going cold. The weather. Skin. I don't think emotion means much until it's attached to something you can taste or touch — so that's where I always start.
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                  <h3 className="font-heading text-xs font-bold text-neutral-400 uppercase tracking-widest">
                    ON HER STYLE // ARCHIVES
                  </h3>
                  <p className="font-sans text-xs md:text-sm text-neutral-500 leading-relaxed font-light">
                    Taranna's poetry moves comfortably between vulnerability and wit. A poem about maggi can be funny and tender in the same breath; a poem like "Loneliness" or "39. Beyond Here" sits in heavier, unresolved territory and doesn't rush toward resolution. She's also written in other voices entirely — "the heart," a poem written from the perspective of a dying spouse, shows a writer willing to leave her own point of view behind completely.
                  </p>
                  <p className="font-sans text-xs md:text-sm text-neutral-500 leading-relaxed font-light">
                    Her more recent work has leaned even further into the sensory and the embodied. "Pani puri" pushes food-as-desire to its most playful extreme. "Searching for a home" is built almost entirely out of the five senses — sound, smell, touch, catalogued with real precision. And "Yin and Yang" reveals a gift for the list-poem — a blessing built through repetition, "I wish you…" carrying the whole poem's rhythm.
                  </p>
                </div>

                {/* More Poems Interactive Anthology Widget */}
                <div className="p-6 bg-white border border-neutral-100 rounded-2xl shadow-xs flex flex-col gap-4">
                  <div>
                    <span className="font-mono text-[9px] tracking-widest text-[#0e5fa3] font-bold block uppercase mb-1">
                      DIGITAL POEM PORTAL
                    </span>
                    <h4 className="font-heading text-sm font-bold text-neutral-900 uppercase">
                      More Poems & Anthologies
                    </h4>
                    <p className="font-sans text-[11px] text-neutral-400 font-light mt-1">
                      Click a title below to view the sensory confessional piece.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5">
                    {POEMS.map((poem) => (
                      <button
                        key={poem.id}
                        onClick={() => setSelectedPoemId(poem.id)}
                        className="p-3 text-left rounded-xl border border-neutral-100 bg-neutral-50/50 hover:bg-[#E65F1B]/5 hover:border-[#E65F1B]/35 transition-all cursor-pointer flex flex-col justify-between min-h-[90px] group"
                      >
                        <span className="font-heading text-xs font-bold text-neutral-800 group-hover:text-[#E65F1B] transition-colors">
                          {poem.title}
                        </span>
                        <span className="font-mono text-[8px] text-neutral-400 uppercase tracking-widest mt-1">
                          {poem.vibe}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Photo Documentation of Writer's Journey */}
                <div className="flex flex-col gap-5 mt-6 p-6 bg-white border border-neutral-100 rounded-3xl shadow-xs">
                  <div>
                    <span className="font-mono text-[9px] tracking-widest text-[#E65F1B] font-bold block uppercase mb-1">
                      WRITER'S SHADOWS // PORTRAITS
                    </span>
                    <h3 className="font-heading text-lg font-bold text-neutral-900 uppercase">
                      Contemplative Workspace & Gaze
                    </h3>
                    <p className="font-sans text-xs text-neutral-400 font-light mt-0.5">
                      Framing the spaces of silent writing where poetic verse translates vulnerability into shared universal echoes. Click to view in Gallery.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2">
                    <div 
                      onClick={() => { handleImageClick("/Writer.jpg.jpeg", "Shedding quiet light on raw, confessional write-ups."); }}
                      className="group relative rounded-2xl overflow-hidden aspect-[3/4] bg-neutral-150 border border-neutral-200/50 shadow-xs cursor-pointer"
                    >
                      <img src="/Writer.jpg.jpeg" alt="Poetics in Chiaroscuro" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                        <div className="flex flex-col">
                          <span className="text-white text-[10px] font-mono tracking-widest uppercase font-bold">Writing Corner</span>
                          <span className="text-neutral-300 text-[8px] font-sans truncate mt-0.5">Poetics in Chiaroscuro</span>
                        </div>
                      </div>
                    </div>

                    <div 
                      onClick={() => { handleImageClick("/Writer.jpg.jpeg", "Quietly reflecting in sensory rooms where poetry takes root."); }}
                      className="group relative rounded-2xl overflow-hidden aspect-[3/4] bg-neutral-150 border border-neutral-200/50 shadow-xs cursor-pointer"
                    >
                      <img src="/Writer.jpg.jpeg" alt="Silent Room" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                        <div className="flex flex-col">
                          <span className="text-white text-[10px] font-mono tracking-widest uppercase font-bold">Contemplative Gaze</span>
                          <span className="text-neutral-300 text-[8px] font-sans truncate mt-0.5">Silent Reflections</span>
                        </div>
                      </div>
                    </div>

                    <div 
                      onClick={() => { handleImageClick("/TD-382.jpg.jpeg", "Symmetrical focus holding deep poise and authentic sincerity."); }}
                      className="group relative rounded-2xl overflow-hidden aspect-[3/4] bg-neutral-150 border border-neutral-200/50 shadow-xs cursor-pointer"
                    >
                      <img src="/TD-382.jpg.jpeg" alt="Intense Sincerity" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                        <div className="flex flex-col">
                          <span className="text-white text-[10px] font-mono tracking-widest uppercase font-bold">Symmetrical Focus</span>
                          <span className="text-neutral-300 text-[8px] font-sans truncate mt-0.5">Symmetrical Sincerity</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Featured Poem "Ode to Myself" */}
              <div className="lg:col-span-6">
                <div className="p-8 md:p-12 bg-[#FCFAF6] border border-neutral-200/80 rounded-3xl shadow-sm relative overflow-hidden flex flex-col">
                  {/* Decorative stamp */}
                  <div className="absolute top-6 right-6 font-mono text-[8px] tracking-[0.4em] text-neutral-300 font-bold uppercase select-none border border-neutral-200 p-1.5 rounded">
                    FEATURED WORK
                  </div>

                  <span className="font-mono text-[9px] tracking-widest text-[#E65F1B] font-bold block mb-4 uppercase">
                    Ode to Myself // FROM "TARANNA"
                  </span>

                  <h3 className="font-heading text-xl md:text-2xl font-bold text-neutral-900 tracking-tight leading-none mb-6">
                    Don't Let Anyone Ever Say Otherwise
                  </h3>

                  <div className="font-mono text-[11px] md:text-xs text-neutral-600 leading-relaxed whitespace-pre-line pl-4 border-l-[1.5px] border-neutral-200 flex flex-col gap-1.5 select-all font-light">
                    {`You are the most precious thing to ever exist on this earth,
a fine blend of earth, ether, water, fire and air.
The way you breathe original ideas into life,
the way you've woven stories out of words,
translated your ideas into inspiring change
that has changed the way many daughters of coming ages view the world.
The way your eyes sparkle every time you discover something new,
come up with a solution,
find a way to help others.

Your love is so deep it could move an entire country into revolution —
a love full of fire that cannot be extinguished,
an embrace so meaningful it feels like every god and goddess is holding you tight,
a smile that lights up the darkest rooms,
a desire to spread laughter where there has been none for days.
You are a force to reckon with. Beckon.
You are slowly becoming a force for greater good.

The ache in your heart is natural —
with each passing day you are breaking apart,
you are expanding.
The world doesn't make sense right now.
You are climbing mountains without knowing it,
reaching heights unknowingly,
crossing countries and places with no changes,
becoming smooth and boundless.

You are a speaker. Why don't you speak?
You are a writer. Write more.
You love color. Create more color.
You love to sing. Sing more.
And be an inspiration.

You don't have to be liked.
You just have to be unmistakably, authentically yourself.
Nothing else.
Everything else will fall into place — is falling into place.

You ask people, "Who am I?"
Ask yourself that question instead.
You are that which cannot be defined.
You are beyond the scope of a career or profession.
You are a multiverse. An independent universe.
You are a bird. You are like water.
You are a lover. You are the sky.
You are the space between notes of music — you are the music.

When you complain, it isn't you complaining.
It's the prisoner inside you, hungry to be free,
feeling stuck in limitations, depending on others' approval.
Dependency for love — maybe that's fine.
Dependency for approval to simply be — that's the worst.
How can you depend on permission to be something
that is already who you are?`}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "public-speaker":
        return (
          <div className="flex flex-col gap-12 md:gap-20">
            {/* Hero Sub-branding */}
            <div className="border-l-4 border-[#0a8fa0] pl-6 py-2 max-w-xl">
              <span className="font-mono text-[10px] tracking-[0.3em] text-[#0a8fa0] font-bold block uppercase mb-1">
                PAGE 3 // PUBLIC SPEAKER
              </span>
              <h1 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 uppercase">
                Taranna, the Speaker
              </h1>
              <p className="font-display italic text-lg md:text-xl text-[#E65F1B] mt-2">
                Talking about what everyone else avoids.
              </p>
            </div>

            {/* Split Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left Column: Speaker description and Accordion */}
              <div className="lg:col-span-8 flex flex-col gap-10">
                <div className="p-6 bg-white border border-neutral-100 rounded-2xl">
                  <span className="font-mono text-[9px] tracking-widest text-[#0a8fa0] font-bold block uppercase mb-3">
                    PERSONAL EXPERIENCE
                  </span>
                  <p className="font-sans font-light text-base text-neutral-600 leading-relaxed mb-4">
                    I talk about the things people usually swallow — shame, guilt, rejection, the parts of a difficult life that don't make it into the highlight reel. Yoga and mental health. Body positivity. The belief, plainly stated, that all bodies are great bodies.
                  </p>
                  <p className="font-sans font-light text-base text-neutral-600 leading-relaxed">
                    I don't come to this as a theory. Everything I speak about, I've lived through first — and I invite the people listening to do the same: to sit with what they feel instead of managing it from a distance, to love more deeply, and to be who they actually are without asking for permission first.
                  </p>
                </div>

                {/* Speaker Topics Expandable Accordion */}
                <div className="flex flex-col gap-4">
                  <h3 className="font-heading text-xs font-bold text-neutral-400 uppercase tracking-widest">
                    SPEAKER TOPICS & TOPICAL NOTES
                  </h3>

                  <div className="flex flex-col border border-neutral-100 rounded-2xl bg-white divide-y divide-neutral-100">
                    {SPEAKER_TOPICS.map((topic, index) => {
                      const isOpen = openSpeakerTopic === index;
                      return (
                        <div key={index} className="flex flex-col">
                          <button
                            onClick={() => setOpenSpeakerTopic(isOpen ? null : index)}
                            className="flex items-center justify-between p-5 text-left hover:bg-neutral-50/50 transition-colors cursor-pointer w-full group"
                          >
                            <span className="font-heading text-xs md:text-sm font-semibold text-neutral-800 group-hover:text-[#0a8fa0] transition-colors">
                              {topic.title}
                            </span>
                            <span className="font-mono text-xs text-neutral-400">
                              {isOpen ? "[-]" : "[+]"}
                            </span>
                          </button>
                          
                          <AnimatePresence>
                            {isOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden bg-neutral-50/50"
                              >
                                <div className="p-5 font-sans text-xs md:text-sm text-neutral-500 leading-relaxed font-light border-t border-neutral-100">
                                  {topic.desc}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Photo Documentation of Speaker's Stage */}
                <div className="flex flex-col gap-5 mt-6 p-6 bg-white border border-neutral-100 rounded-3xl shadow-xs">
                  <div>
                    <span className="font-mono text-[9px] tracking-widest text-[#0a8fa0] font-bold block uppercase mb-1">
                      STAGE PRESENCE // DIALOGUE
                    </span>
                    <h3 className="font-heading text-lg font-bold text-neutral-900 uppercase">
                      Vocalizing Silent Struggles
                    </h3>
                    <p className="font-sans text-xs text-neutral-400 font-light mt-0.5">
                      Giving voice to deep shame, societal expectations, somatic yoga, and the courage of existing loudly. Click to view in Gallery.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2">
                    <div 
                      onClick={() => { handleImageClick("/Speaker.JPG.jpeg", "Vocalizing shadow work and somatic self-trust before public audiences."); }}
                      className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-neutral-150 border border-neutral-200/50 shadow-xs cursor-pointer"
                    >
                      <img src="/Speaker.JPG.jpeg" alt="Vocalizing Struggles" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                        <div className="flex flex-col">
                          <span className="text-white text-[10px] font-mono tracking-widest uppercase font-bold">Speaking Stage</span>
                          <span className="text-neutral-300 text-[8px] font-sans truncate mt-0.5">Confessional Presentation</span>
                        </div>
                      </div>
                    </div>

                    <div 
                      onClick={() => { handleImageClick("/Speaker.JPG.jpeg", "Sculpted shadow-play capturing spatial poise and intense presence."); }}
                      className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-neutral-150 border border-neutral-200/50 shadow-xs cursor-pointer"
                    >
                      <img src="/Speaker.JPG.jpeg" alt="Sculpted Poise" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                        <div className="flex flex-col">
                          <span className="text-white text-[10px] font-mono tracking-widest uppercase font-bold">Spatial Poise</span>
                          <span className="text-neutral-300 text-[8px] font-sans truncate mt-0.5">Sculpted Shadow-Play</span>
                        </div>
                      </div>
                    </div>

                    <div 
                      onClick={() => { handleImageClick("/NOV00034.JPG.jpeg", "Authentic engagement, answering somatic healing questions."); }}
                      className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-neutral-150 border border-neutral-200/50 shadow-xs cursor-pointer"
                    >
                      <img src="/NOV00034.JPG.jpeg" alt="Dialogue Session" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                        <div className="flex flex-col">
                          <span className="text-white text-[10px] font-mono tracking-widest uppercase font-bold">Q&A Exchange</span>
                          <span className="text-neutral-300 text-[8px] font-sans truncate mt-0.5">Dialogue & Audience Q&A</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Where to Find Her & Booking Form */}
              <div className="lg:col-span-4 flex flex-col gap-6">
                {/* Social media targets */}
                <div className="p-6 bg-[#FCFAF6] border border-neutral-100 rounded-2xl flex flex-col gap-5">
                  <div>
                    <span className="font-mono text-[8px] tracking-widest text-[#0a8fa0] font-bold block uppercase mb-1">
                      WHERE TO FIND HER
                    </span>
                    <h4 className="font-heading text-base font-bold text-neutral-900 uppercase">
                      Audible Streams
                    </h4>
                  </div>

                  <div className="flex flex-col gap-3">
                    <a 
                      href="https://www.youtube.com/@withlovetaranna_me" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3.5 bg-white border border-neutral-200/80 rounded-xl hover:border-red-500 hover:bg-red-50/20 transition-all text-neutral-700 hover:text-red-600 font-mono text-[10px] font-bold tracking-widest uppercase"
                    >
                      <span className="flex items-center gap-2">
                        <Youtube className="w-4 h-4 text-red-500" />
                        YouTube Channel
                      </span>
                      <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                    </a>

                    <a 
                      href="https://www.instagram.com/@withlove_taranna" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3.5 bg-white border border-neutral-200/80 rounded-xl hover:border-pink-500 hover:bg-pink-50/20 transition-all text-neutral-700 hover:text-pink-600 font-mono text-[10px] font-bold tracking-widest uppercase"
                    >
                      <span className="flex items-center gap-2">
                        <Instagram className="w-4 h-4 text-pink-500" />
                        Instagram Feed
                      </span>
                      <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                    </a>
                  </div>
                </div>

                {/* Booking Trigger */}
                <div className="p-6 bg-white border border-neutral-200/60 rounded-2xl shadow-sm flex flex-col gap-4">
                  <div>
                    <span className="font-mono text-[9px] tracking-widest font-bold text-[#E65F1B] block uppercase mb-1">
                      ORATORICAL BOOKING
                    </span>
                    <h4 className="font-heading text-base font-bold text-neutral-900">
                      Speaking Events
                    </h4>
                    <p className="font-sans text-xs text-neutral-400 leading-relaxed mt-1 font-light">
                      Book Taranna for keynotes, workshops, podcasts or academic panels.
                    </p>
                  </div>

                  <button 
                    onClick={() => { setIsBookingOpen(true); setBookingSuccess(false); }}
                    className="w-full font-mono text-[10px] tracking-widest uppercase font-bold text-white bg-neutral-950 hover:bg-neutral-850 px-5 py-4 rounded-xl shadow-xs transition-colors cursor-pointer text-center"
                  >
                    Book Taranna to speak
                  </button>
                </div>
              </div>
            </div>

            {/* YouTube & Instagram Media Previews and Samples */}
            <div className="mt-16 pt-12 border-t border-neutral-200/60 flex flex-col gap-8">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                  <span className="font-mono text-[9px] tracking-[0.25em] text-[#0a8fa0] font-bold block uppercase mb-1">
                    DIGITAL PREVIEWS // SOCIAL FEEDS
                  </span>
                  <h3 className="font-heading text-2xl font-bold text-neutral-900 uppercase">
                    Featured Media Samples
                  </h3>
                  <p className="font-sans text-xs text-neutral-500 font-light mt-1">
                    Play audio extracts or read social insights directly below to preview her message before visiting the platforms.
                  </p>
                </div>

                {/* Tab Switcher */}
                <div className="flex bg-neutral-100 p-1 rounded-xl self-start md:self-auto border border-neutral-200/40">
                  <button
                    onClick={() => { setActiveMediaTab("youtube"); setPlayingVideoId(null); }}
                    className={`px-4 py-2 rounded-lg font-mono text-[10px] tracking-wider uppercase font-bold transition-all cursor-pointer flex items-center gap-2 ${
                      activeMediaTab === "youtube"
                        ? "bg-white text-neutral-950 shadow-sm"
                        : "text-neutral-500 hover:text-neutral-800"
                    }`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${activeMediaTab === "youtube" ? "bg-red-500 animate-pulse" : "bg-neutral-300"}`} />
                    YouTube Samples
                  </button>
                  <button
                    onClick={() => { setActiveMediaTab("instagram"); setPlayingVideoId(null); }}
                    className={`px-4 py-2 rounded-lg font-mono text-[10px] tracking-wider uppercase font-bold transition-all cursor-pointer flex items-center gap-2 ${
                      activeMediaTab === "instagram"
                        ? "bg-white text-neutral-950 shadow-sm"
                        : "text-neutral-500 hover:text-neutral-800"
                    }`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${activeMediaTab === "instagram" ? "bg-pink-500 animate-pulse" : "bg-neutral-300"}`} />
                    Instagram Feed
                  </button>
                </div>
              </div>

              {/* Tab Contents */}
              <AnimatePresence mode="wait">
                {activeMediaTab === "youtube" ? (
                  <motion.div
                    key="youtube-tab"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col gap-8"
                  >
                    {/* Interactive YouTube Video Embed Player */}
                    {playingVideoId && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        className="bg-neutral-950 text-white rounded-3xl p-5 md:p-6 border border-neutral-800 flex flex-col gap-5 shadow-xl relative overflow-hidden"
                      >
                        <div className="flex justify-between items-center pb-3 border-b border-neutral-850">
                          <div>
                            <span className="font-mono text-[8px] tracking-widest text-red-500 font-bold uppercase">
                              NOW STREAMING // ACTIVE VIDEO EMBED
                            </span>
                            <h4 className="font-heading text-base md:text-lg font-bold text-white tracking-tight uppercase mt-0.5">
                              {playingVideoId === "yt-disliked" && "The Courage to Be Disliked"}
                              {playingVideoId === "yt-shame" && "Shame and Guilt: Naming Your Shadows"}
                              {playingVideoId === "yt-body" && "Body Image & Radical Self-Love"}
                            </h4>
                          </div>
                          <button
                            onClick={() => setPlayingVideoId(null)}
                            className="font-mono text-[10px] tracking-widest uppercase bg-red-600 hover:bg-red-700 hover:scale-105 active:scale-95 text-white font-bold px-4 py-2 rounded-full transition-all cursor-pointer"
                          >
                            Close Video ×
                          </button>
                        </div>

                        {/* Real Iframe Embed */}
                        <div className="w-full aspect-video rounded-2xl overflow-hidden border border-neutral-850 bg-neutral-900 shadow-inner">
                          <iframe
                            src={`https://www.youtube.com/embed/${
                              playingVideoId === "yt-disliked" ? "_U0QvsnVfGg" :
                              playingVideoId === "yt-shame" ? "psN1DORYYV0" :
                              "H_8y0SBy3H8"
                            }?autoplay=1&rel=0&modestbranding=1`}
                            title="Interactive Video Player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            className="w-full h-full"
                          />
                        </div>

                        <div className="flex justify-between items-center font-mono text-[9px] text-neutral-400">
                          <span>SOURCE: PUBLIC OUTREACH & TED TALKS</span>
                          <span>PRESS ESCAPE OR CLICK CLOSE TO DISMISS</span>
                        </div>
                      </motion.div>
                    )}

                    {/* YouTube Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {[
                        {
                          id: "yt-disliked",
                          title: "The Courage to Be Disliked",
                          desc: "A deep dive into radical self-acceptance, breaking down why seeking constant external approval is a prison.",
                          duration: "18:45",
                          views: "12.4k",
                          quote: "We spend our entire lives managing other people's perceptions. What if we just stopped?",
                          color: "from-blue-900/40"
                        },
                        {
                          id: "yt-shame",
                          title: "Shame & Guilt: Naming Your Shadows",
                          desc: "Recorded live at a mental health summit, Taranna explains why suppressing emotions prolongs our suffering.",
                          duration: "12:10",
                          views: "8.9k",
                          quote: "Shame dies when it is spoken in a room where people listen.",
                          color: "from-emerald-900/40"
                        },
                        {
                          id: "yt-body",
                          title: "Body Image & Radical Self-Love",
                          desc: "An empowering keynote challenging fatphobia, recounting her own transition from hiding to modeling.",
                          duration: "24:30",
                          views: "15.1k",
                          quote: "Your body is not an ornament to look at; it is the home you live in.",
                          color: "from-amber-900/40"
                        }
                      ].map((vid) => {
                        const isPlaying = playingVideoId === vid.id;
                        return (
                          <div
                            key={vid.id}
                            className="bg-white border border-neutral-200/80 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
                          >
                            <div className={`p-6 bg-gradient-to-b ${vid.color} to-white aspect-video relative flex flex-col justify-between`}>
                              <div className="flex justify-between items-center">
                                <span className="font-mono text-[8px] font-bold bg-black/60 text-white px-2 py-0.5 rounded-full uppercase tracking-wider">
                                  PODCAST SESSION
                                </span>
                                <span className="font-mono text-[9px] text-neutral-500 font-bold bg-white/85 px-1.5 py-0.2 rounded">
                                  {vid.duration}
                                </span>
                              </div>

                              <div className="my-auto flex justify-center py-2">
                                <button
                                  onClick={() => setPlayingVideoId(isPlaying ? null : vid.id)}
                                  className={`w-12 h-12 rounded-full flex items-center justify-center transition-all cursor-pointer ${
                                    isPlaying 
                                      ? "bg-red-500 text-white scale-110 shadow-lg animate-pulse" 
                                      : "bg-white text-neutral-900 hover:scale-105 shadow-sm"
                                  }`}
                                >
                                  {isPlaying ? (
                                    <span className="font-bold text-xs uppercase tracking-widest">II</span>
                                  ) : (
                                    <Play className="w-5 h-5 fill-current ml-0.5 text-red-500" />
                                  )}
                                </button>
                              </div>

                              <div className="flex justify-between items-center text-[9px] font-mono text-neutral-600 mt-2">
                                <span className="flex items-center gap-1">
                                  <Eye className="w-3 h-3 text-neutral-400" /> {vid.views} views
                                </span>
                                <span className="text-red-500 font-bold uppercase tracking-wider">PLAY AUDIO EXTRACT</span>
                              </div>
                            </div>

                            <div className="p-5 flex flex-col gap-3">
                              <h4 className="font-heading text-xs font-bold text-neutral-900 uppercase">
                                {vid.title}
                              </h4>
                              <p className="font-sans text-[11px] text-neutral-500 leading-relaxed font-light">
                                {vid.desc}
                              </p>
                              <div className="p-3 bg-neutral-50 border-l border-[#0a8fa0] rounded-r-lg">
                                <p className="font-display italic text-xxs text-neutral-600">
                                  "{vid.quote}"
                                </p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="instagram-tab"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.4 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                  >
                    {[
                      {
                        id: "ig-monsoon",
                        title: "Monsoons & Stillness",
                        desc: "Mumbai at 4 AM taught me that peace isn't the absence of noise, but the space you make inside.",
                        likes: igLikes["ig-monsoon"],
                        hasLiked: !!igHasLiked["ig-monsoon"],
                        sound: "Ambient Piano - Solitude",
                        caption: "Chasing quiet in a city of 20 million. Adrak chai brewing in the background. Stop looking for permission to just exist and rest."
                      },
                      {
                        id: "ig-plus-size",
                        title: "Unapologetically Plus",
                        desc: "A reminder for today: Wear the loud color. Take up space. Let them look. You are the multiverse.",
                        likes: igLikes["ig-plus-size"],
                        hasLiked: !!igHasLiked["ig-plus-size"],
                        sound: "Original Audio - Taranna",
                        caption: "Every body is a great body. This is a baseline truth. Stop managing other people's comfort at the cost of your posture."
                      },
                      {
                        id: "ig-adrak-chai",
                        title: "Poetry of Tactile Joys",
                        desc: "Anchor yourself in the tactile. Sometimes the most spiritual thing is drinking your tea hot.",
                        likes: igLikes["ig-adrak-chai"],
                        hasLiked: !!igHasLiked["ig-adrak-chai"],
                        sound: "Soft Lofi Beats - Rain",
                        caption: "A bowl of maggi. Adrak chai going cold. Loneliness is just a map of where you are not. Ground your feelings in things you can touch."
                      }
                    ].map((post) => {
                      const comments = igComments[post.id] || [];
                      const inputVal = newCommentText[post.id] || "";
                      return (
                        <div
                          key={post.id}
                          className="bg-white border border-neutral-200/80 rounded-2xl overflow-hidden shadow-xs flex flex-col justify-between"
                        >
                          {/* Feed Header */}
                          <div className="p-4 flex items-center justify-between border-b border-neutral-100">
                            <div className="flex items-center gap-2">
                              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-500 to-pink-500 p-0.5">
                                <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-[10px]">
                                  🧘
                                </div>
                              </div>
                              <div className="flex flex-col">
                                <span className="font-heading text-[10px] font-bold text-neutral-800 leading-none flex items-center gap-1 uppercase">
                                  withlove_taranna
                                  <span className="text-[8px] text-blue-500">✓</span>
                                </span>
                                <span className="text-[8px] text-neutral-400 font-mono">Mumbai, India</span>
                              </div>
                            </div>
                            <span className="font-mono text-[8px] font-bold text-neutral-400 uppercase tracking-widest">[REEL]</span>
                          </div>

                          {/* Visual Content (Simulated Video Cover) */}
                          <div className="aspect-square bg-neutral-900 relative flex items-center justify-center overflow-hidden border-b border-neutral-100">
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#E65F1B]/30 to-[#0e5fa3]/30 mix-blend-multiply" />
                            
                            <div className="p-6 text-center text-white z-10 flex flex-col gap-2 max-w-[85%]">
                              <h5 className="font-heading text-xs font-bold uppercase tracking-wider text-amber-300">
                                {post.title}
                              </h5>
                              <p className="font-display italic text-xxs text-neutral-100 leading-relaxed font-light">
                                "{post.desc}"
                              </p>
                              <span className="font-mono text-[7px] text-neutral-400 uppercase tracking-widest mt-2 flex items-center justify-center gap-1">
                                <Volume2 className="w-2.5 h-2.5 text-pink-400" /> {post.sound}
                              </span>
                            </div>
                          </div>

                          {/* Action Buttons Row */}
                          <div className="p-4 flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <button
                                onClick={() => handleLikeIgPost(post.id)}
                                className="flex items-center gap-1 text-xs cursor-pointer group"
                              >
                                <Heart
                                  className={`w-4.5 h-4.5 transition-all duration-300 ${
                                    post.hasLiked
                                      ? "fill-red-500 text-red-500 scale-125"
                                      : "text-neutral-600 group-hover:text-red-500"
                                  }`}
                                />
                                <span className="font-mono text-[9px] font-bold text-neutral-600">
                                  {post.likes}
                                </span>
                              </button>

                              <div className="flex items-center gap-1 text-xs text-neutral-600">
                                <MessageSquare className="w-4.5 h-4.5 text-neutral-500" />
                                <span className="font-mono text-[9px] font-bold">
                                  {comments.length}
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Caption */}
                          <div className="px-4 pb-2">
                            <p className="font-sans text-[11px] text-neutral-600 leading-relaxed font-light">
                              <span className="font-bold text-neutral-800 mr-1 text-[10px] uppercase">withlove_taranna</span>
                              {post.caption}
                            </p>
                          </div>

                          {/* Interactive Comments scrollbox */}
                          <div className="px-4 py-2 border-t border-neutral-50 bg-neutral-50/50 max-h-[100px] overflow-y-auto flex flex-col gap-1.5">
                            {comments.map((comm, idx) => (
                              <div key={idx} className="flex flex-col text-[10px] font-sans">
                                <span className="font-semibold text-neutral-700">{comm.user}</span>
                                <span className="text-neutral-500 font-light leading-relaxed">{comm.text}</span>
                              </div>
                            ))}
                          </div>

                          {/* Input Comment Box */}
                          <div className="p-3 border-t border-neutral-100 flex items-center gap-2">
                            <input
                              type="text"
                              value={inputVal}
                              onChange={(e) => {
                                const val = e.target.value;
                                setNewCommentText((prev) => ({
                                  ...prev,
                                  [post.id]: val
                                }));
                              }}
                              onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                  handleAddIgComment(post.id);
                                }
                              }}
                              placeholder="Add a comment..."
                              className="flex-grow bg-neutral-50 border border-neutral-200 rounded-lg px-3 py-1.5 font-sans text-[10px] outline-none focus:bg-white focus:border-neutral-400"
                            />
                            <button
                              onClick={() => handleAddIgComment(post.id)}
                              className="font-mono text-[8px] font-bold uppercase text-[#0a8fa0] tracking-widest cursor-pointer px-2"
                            >
                              POST
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        );

      case "model":
        return (
          <div className="flex flex-col gap-12 md:gap-20">
            {/* Hero Sub-branding */}
            <div className="border-l-4 border-[#c57d11] pl-6 py-2 max-w-xl">
              <span className="font-mono text-[10px] tracking-[0.3em] text-[#c57d11] font-bold block uppercase mb-1">
                PAGE 4 // MODEL
              </span>
              <h1 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 uppercase">
                Taranna, the Model
              </h1>
              <p className="font-display italic text-lg md:text-xl text-[#0e5fa3] mt-2">
                Every body is a great body.
              </p>
            </div>

            {/* Split Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left Column: Narrative description */}
              <div className="lg:col-span-7 flex flex-col gap-10">
                <div className="p-6 bg-[#FCFAF6] border border-neutral-100 rounded-2xl">
                  <span className="font-mono text-[9px] tracking-widest text-[#c57d11] font-bold block uppercase mb-3">
                    THE STORY IN THE IMAGE
                  </span>
                  <p className="font-sans font-light text-base text-neutral-600 leading-relaxed mb-4">
                    Back in 2018, I saw a plus-size model on Instagram for the first time — dancing, posing, completely unbothered — and something in me lit up. I wished I could be something like her. And slowly, slowly, I became her. That's the whole story, really — it just took years to actually happen.
                  </p>
                  <p className="font-sans font-light text-base text-neutral-600 leading-relaxed mb-4">
                    Modeling didn't start as a career move. It became a tool for my own growth — I came out of it more confident, more at peace with myself, more in tune with my own emotions, and needing a lot less validation from other people to feel okay. What I didn't expect was that it wouldn't stop with me. My work has gone on to inspire plus-size girls and boys to embrace their bodies exactly as they are.
                  </p>
                  <p className="font-sans font-light text-base text-neutral-600 leading-relaxed">
                    That's the part that feels full circle — someone gave me permission I didn't know I needed, just by existing loudly and joyfully online. Now I get to be that for somebody else.
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                  <h3 className="font-heading text-xs font-bold text-neutral-400 uppercase tracking-widest">
                    THE CRAFT, NOT JUST THE IMAGE
                  </h3>
                  <p className="font-sans text-xs md:text-sm text-neutral-500 leading-relaxed font-light">
                    For Taranna, modeling isn't only about the image that ends up on screen — it's about the process that gets her there. She's spoken about the camera as almost a mirror: the angles, the light, the technical craft of it all becoming a vehicle for something inner to finally get seen — sometimes even by the person in front of the lens, first. It's the same instinct that runs through her writing and her speaking: dig into a feeling you haven't fully named yet, and turn it into something shared.
                  </p>
                </div>

                <div className="p-6 bg-white border border-neutral-100 rounded-2xl flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <Award className="w-4.5 h-4.5 text-[#c57d11]" />
                    <h3 className="font-heading text-xs font-bold text-neutral-900 tracking-widest uppercase">
                      Body Positivity, In Practice
                    </h3>
                  </div>
                  <p className="font-sans text-xs md:text-sm text-neutral-500 leading-relaxed font-light">
                    Taranna's modeling work sits inside a wider mission — proving, publicly and repeatedly, that plus-size bodies belong in every room a straight-size body does. Not as a trend. Not as a token. As the standard.
                  </p>
                </div>
              </div>

              {/* Right Column: Campaign portfolio highlight */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                <div className="p-6 bg-white border border-neutral-200/60 rounded-2xl shadow-sm flex flex-col gap-6">
                  <div>
                    <span className="font-mono text-[9px] tracking-widest font-bold text-[#c57d11] block uppercase mb-1">
                      PORTFOLIO HIGHLIGHTS
                    </span>
                    <h3 className="font-heading text-base font-bold text-neutral-900">
                      Campaign Highlights
                    </h3>
                    <p className="font-sans text-xs text-neutral-400 font-light mt-0.5">
                      Hover to explore the technical framing. Click to view in Gallery.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {CAMPAIGNS.map((campaign, idx) => (
                      <div 
                        key={idx}
                        onClick={() => { handleImageClick(campaign.image, campaign.caption); }}
                        className="relative rounded-xl overflow-hidden aspect-square group cursor-pointer bg-neutral-900 border border-neutral-100"
                      >
                        <img 
                          src={campaign.image} 
                          alt="Campaign" 
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 brightness-95 group-hover:brightness-100"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent opacity-0 group-hover:opacity-100 transition-opacity p-3 flex flex-col justify-end">
                          <span className="font-mono text-[7px] text-amber-400 font-bold tracking-widest uppercase">{campaign.label}</span>
                          <span className="font-sans text-[9px] text-white truncate font-medium mt-0.5">{campaign.caption}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-neutral-100 flex flex-col gap-2">
                    <span className="font-mono text-[8px] tracking-widest text-neutral-400 font-bold block uppercase">SOCIAL ENGAGEMENTS</span>
                    <div className="flex flex-col gap-2">
                      <a 
                        href="https://www.instagram.com/@withlove_taranna" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-xs text-neutral-600 hover:text-neutral-900 flex items-center gap-1.5 font-light"
                      >
                        <Instagram className="w-3.5 h-3.5 text-neutral-400" />
                        <span>Instagram: @withlove_taranna</span>
                      </a>
                      <a 
                        href="https://www.youtube.com/@withlovetaranna_me" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-xs text-neutral-600 hover:text-neutral-900 flex items-center gap-1.5 font-light"
                      >
                        <Youtube className="w-3.5 h-3.5 text-neutral-400" />
                        <span>YouTube: @withlovetaranna_me</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#FCFAF6] text-neutral-900 pt-36 pb-24 px-6 font-sans relative antialiased flex flex-col justify-between">
      
      {/* Editorial Grid Backing Lines */}
      <div className="absolute top-0 bottom-0 left-6 w-[1px] bg-neutral-100 hidden xl:block pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-6 w-[1px] bg-neutral-100 hidden xl:block pointer-events-none" />

      {/* Main Container */}
      <div className="max-w-5xl mx-auto w-full my-auto z-10 relative">
        
        {/* Animated Slide-Up Page Entrance */}
        <motion.div
          key={view}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full"
        >
          {renderContent()}
        </motion.div>

        {/* Action Button Row */}
        <div className="mt-20 pt-10 border-t border-neutral-150 flex flex-wrap gap-4 items-center">
          <button
            onClick={onBack}
            className="group font-mono text-[10px] tracking-widest uppercase font-bold text-white bg-neutral-950 hover:bg-neutral-850 px-6 py-4 rounded-xl shadow-md transition-all flex items-center gap-2.5 cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            <span>RETURN TO HOME</span>
          </button>
        </div>

      </div>

      {/* FOOTER DIALOGS & OVERLAYS (AnimatePresence) */}
      <AnimatePresence>
        {/* Social Entrepreneur Action Modals */}
        {activeModal && (
          <div className="fixed inset-0 bg-black/75 backdrop-blur-xs z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-3xl p-8 max-w-md w-full border border-neutral-100 shadow-2xl relative"
            >
              <button 
                onClick={() => setActiveModal(null)}
                className="absolute top-6 right-6 font-mono text-[10px] tracking-widest text-neutral-400 hover:text-neutral-900 cursor-pointer font-bold"
              >
                [CLOSE]
              </button>

              {modalSuccess ? (
                <div className="py-10 flex flex-col items-center justify-center text-center gap-3">
                  <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white mb-2">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="font-heading text-lg font-bold text-neutral-900 uppercase">
                    Thank You Sincerely
                  </h4>
                  <p className="font-sans text-xs text-neutral-500 leading-relaxed font-light">
                    {activeModal === "donate" 
                      ? `Your contribution of ₹${donationAmount} has been registered successfully. A receipt is on its way.`
                      : `Your request has been received. Our regional coordinators will contact you within 24 hours.`
                    }
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="flex flex-col gap-5">
                  <div>
                    <span className="font-mono text-[9px] tracking-widest text-[#0e5fa3] font-bold block uppercase mb-1">
                      SAMPOORNA PORTAL
                    </span>
                    <h4 className="font-heading text-lg font-bold text-neutral-900 uppercase">
                      {activeModal === "partner" && "Partner With Us"}
                      {activeModal === "volunteer" && "Become a Volunteer"}
                      {activeModal === "donate" && "Support Our Initiatives"}
                    </h4>
                    <p className="font-sans text-xs text-neutral-400 leading-relaxed font-light mt-1">
                      {activeModal === "donate" 
                        ? "Registered with 12A/80G. Contributions receive tax relief receipts." 
                        : "Connect with our Mumbai headquarters."
                      }
                    </p>
                  </div>

                  <div className="flex flex-col gap-3.5">
                    <div className="flex flex-col gap-1.5">
                      <label className="font-mono text-[9px] tracking-wider text-neutral-500 uppercase font-bold">Your Name</label>
                      <input 
                        type="text" 
                        required
                        value={formName}
                        onChange={(e) => setFormName(e.target.value)}
                        placeholder="Taranna Garg" 
                        className="w-full px-4 py-3 border border-neutral-200 rounded-xl font-sans text-xs outline-none focus:border-neutral-900 focus:bg-neutral-50/20"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="font-mono text-[9px] tracking-wider text-neutral-500 uppercase font-bold">Email Address</label>
                      <input 
                        type="email" 
                        required
                        value={formEmail}
                        onChange={(e) => setFormEmail(e.target.value)}
                        placeholder="name@gmail.com" 
                        className="w-full px-4 py-3 border border-neutral-200 rounded-xl font-sans text-xs outline-none focus:border-neutral-900 focus:bg-neutral-50/20"
                      />
                    </div>

                    {activeModal === "donate" && (
                      <div className="flex flex-col gap-2">
                        <label className="font-mono text-[9px] tracking-wider text-neutral-500 uppercase font-bold">Contribution Amount (INR)</label>
                        <div className="grid grid-cols-4 gap-2">
                          {["500", "1000", "5000", "10000"].map((amt) => (
                            <button
                              type="button"
                              key={amt}
                              onClick={() => setDonationAmount(amt)}
                              className={`py-2 rounded-lg border font-mono text-xs font-bold cursor-pointer transition-colors ${
                                donationAmount === amt 
                                  ? "bg-neutral-950 text-white border-neutral-950" 
                                  : "bg-neutral-50 text-neutral-600 border-neutral-200 hover:bg-neutral-100"
                              }`}
                            >
                              ₹{amt}
                            </button>
                          ))}
                        </div>
                        <input 
                          type="number" 
                          required
                          value={donationAmount}
                          onChange={(e) => setDonationAmount(e.target.value)}
                          className="w-full px-4 py-3 border border-neutral-200 rounded-xl font-mono text-xs outline-none focus:border-neutral-900 focus:bg-neutral-50/20 mt-1"
                        />
                      </div>
                    )}

                    {activeModal !== "donate" && (
                      <div className="flex flex-col gap-1.5">
                        <label className="font-mono text-[9px] tracking-wider text-neutral-500 uppercase font-bold">Message or Motivation</label>
                        <textarea 
                          rows={3}
                          placeholder="How would you like to participate?" 
                          className="w-full px-4 py-3 border border-neutral-200 rounded-xl font-sans text-xs outline-none focus:border-neutral-900 focus:bg-neutral-50/20 resize-none"
                        />
                      </div>
                    )}
                  </div>

                  <button 
                    type="submit"
                    className="w-full font-mono text-[10px] tracking-widest uppercase font-bold text-white bg-neutral-950 hover:bg-neutral-850 py-4 rounded-xl cursor-pointer shadow-xs mt-3 text-center"
                  >
                    Confirm Submission
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}

        {/* Writer Poetry Details Overlay */}
        {selectedPoemId && (
          <div className="fixed inset-0 bg-black/75 backdrop-blur-xs z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-3xl p-8 max-w-lg w-full border border-neutral-100 shadow-2xl relative max-h-[85vh] overflow-y-auto"
            >
              <button 
                onClick={() => setSelectedPoemId(null)}
                className="absolute top-6 right-8 font-mono text-[10px] tracking-widest text-neutral-400 hover:text-neutral-900 cursor-pointer font-bold"
              >
                [CLOSE]
              </button>

              {(() => {
                const poem = POEMS.find(p => p.id === selectedPoemId);
                if (!poem) return null;
                return (
                  <div className="flex flex-col gap-4">
                    <span className="font-mono text-[9px] tracking-widest text-[#E65F1B] font-bold block uppercase mb-1">
                      Anthology Archives // Confessional Verse
                    </span>
                    <h4 className="font-heading text-xl font-bold text-neutral-900 uppercase">
                      {poem.title}
                    </h4>
                    <span className="font-mono text-[8px] tracking-[0.3em] uppercase text-neutral-400 block -mt-1 font-bold">
                      {poem.vibe}
                    </span>
                    <div className="w-8 h-[1px] bg-neutral-100 my-2" />
                    <div className="font-mono text-xs text-neutral-600 leading-relaxed whitespace-pre-line pl-4 border-l border-[#E65F1B]/30 select-all font-light py-2">
                      {poem.text}
                    </div>
                  </div>
                );
              })()}
            </motion.div>
          </div>
        )}

        {/* Public Speaker Booking Form Modal */}
        {isBookingOpen && (
          <div className="fixed inset-0 bg-black/75 backdrop-blur-xs z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-3xl p-8 max-w-md w-full border border-neutral-100 shadow-2xl relative"
            >
              <button 
                onClick={() => setIsBookingOpen(false)}
                className="absolute top-6 right-6 font-mono text-[10px] tracking-widest text-neutral-400 hover:text-neutral-900 cursor-pointer font-bold"
              >
                [CLOSE]
              </button>

              {bookingSuccess ? (
                <div className="py-10 flex flex-col items-center justify-center text-center gap-3">
                  <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white mb-2">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="font-heading text-lg font-bold text-neutral-900 uppercase">
                    Booking Request Sent
                  </h4>
                  <p className="font-sans text-xs text-neutral-500 leading-relaxed font-light">
                    We have noted your request for {bookingDate}. Taranna's coordinator will review the slot and respond via email within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleBookingSubmit} className="flex flex-col gap-5">
                  <div>
                    <span className="font-mono text-[9px] tracking-widest text-[#0a8fa0] font-bold block uppercase mb-1">
                      ORATORICAL ENGAGEMENT
                    </span>
                    <h4 className="font-heading text-lg font-bold text-neutral-900 uppercase">
                      Book speaking event
                    </h4>
                    <p className="font-sans text-xs text-neutral-400 leading-relaxed font-light mt-1">
                      Provide details for your event, university panel, or podcast recording.
                    </p>
                  </div>

                  <div className="flex flex-col gap-3.5">
                    <div className="flex flex-col gap-1.5">
                      <label className="font-mono text-[9px] tracking-wider text-neutral-500 uppercase font-bold">Organizer / Institution</label>
                      <input 
                        type="text" 
                        required
                        placeholder="Tata Institute or Podcast Name" 
                        className="w-full px-4 py-3 border border-neutral-200 rounded-xl font-sans text-xs outline-none focus:border-neutral-900 focus:bg-neutral-50/20"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="font-mono text-[9px] tracking-wider text-neutral-500 uppercase font-bold">Contact Email</label>
                      <input 
                        type="email" 
                        required
                        placeholder="contact@institution.org" 
                        className="w-full px-4 py-3 border border-neutral-200 rounded-xl font-sans text-xs outline-none focus:border-neutral-900 focus:bg-neutral-50/20"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="font-mono text-[9px] tracking-wider text-neutral-500 uppercase font-bold">Proposed Date</label>
                      <input 
                        type="date" 
                        required
                        value={bookingDate}
                        onChange={(e) => setBookingDate(e.target.value)}
                        className="w-full px-4 py-3 border border-neutral-200 rounded-xl font-mono text-xs outline-none focus:border-neutral-900 focus:bg-neutral-50/20"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="font-mono text-[9px] tracking-wider text-neutral-500 uppercase font-bold">Event Format</label>
                      <select 
                        className="w-full px-4 py-3 border border-neutral-200 bg-white rounded-xl font-sans text-xs outline-none focus:border-neutral-900"
                      >
                        <option>Academic Panel / Lecture</option>
                        <option>Podcast Interview</option>
                        <option>Community Keynote Address</option>
                        <option>Corporate Positivity Workshop</option>
                      </select>
                    </div>
                  </div>

                  <button 
                    type="submit"
                    className="w-full font-mono text-[10px] tracking-widest uppercase font-bold text-white bg-neutral-950 hover:bg-neutral-850 py-4 rounded-xl cursor-pointer shadow-xs mt-3 text-center"
                  >
                    Send Booking Request
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}

        {/* Model Portfolio Zoom Modal with filters */}
        {zoomedImage && (
          <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="max-w-4xl w-full flex flex-col md:flex-row gap-8 items-center bg-neutral-950 rounded-3xl p-6 md:p-8 relative border border-neutral-800"
            >
              <button 
                onClick={() => { setZoomedImage(null); setPortfolioBrightness(1.0); setPortfolioContrast(1.1); }}
                className="absolute top-6 right-6 font-mono text-[10px] tracking-widest text-neutral-400 hover:text-white cursor-pointer font-bold"
              >
                [CLOSE GALLERY]
              </button>

              {/* Left Side: Zoomed Image Container */}
              <div className="w-full md:w-3/5 aspect-square relative rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-900">
                <img 
                  src={zoomedImage} 
                  alt="Portfolio Zoom" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-all"
                  style={{ filter: `contrast(${portfolioContrast}) brightness(${portfolioBrightness})` }}
                />
              </div>

              {/* Right Side: Editorial Filters & Specs */}
              <div className="w-full md:w-2/5 flex flex-col gap-6 justify-between self-stretch text-white">
                <div className="flex flex-col gap-3">
                  <span className="font-mono text-[9px] tracking-widest text-[#E65F1B] font-bold block uppercase">
                    EDITORIAL MAGNIFIER
                  </span>
                  <h4 className="font-heading text-lg font-bold tracking-tight uppercase leading-snug">
                    {zoomedCaption.split(" // ")[0]}
                  </h4>
                  <span className="font-mono text-[9px] tracking-widest text-neutral-500 uppercase block -mt-1 font-bold">
                    {zoomedCaption.split(" // ")[1]}
                  </span>
                  <div className="w-10 h-[1.5px] bg-neutral-800 my-2" />
                  <p className="font-sans text-xs text-neutral-400 leading-relaxed font-light">
                    Every body is an original multiverse of ether and fire. Explore the light balancing of Taranna's portrait focus below.
                  </p>
                </div>

                {/* Adjustments Panel */}
                <div className="p-4 rounded-xl border border-neutral-800 bg-neutral-900/50 flex flex-col gap-4 mt-auto">
                  <div className="flex items-center gap-2 text-neutral-400">
                    <Sliders className="w-3.5 h-3.5 text-amber-500" />
                    <span className="font-mono text-[8px] font-bold uppercase tracking-widest">Image adjustments</span>
                  </div>

                  <div className="flex flex-col gap-3">
                    <div className="flex flex-col gap-1">
                      <div className="flex justify-between font-mono text-[8px] text-neutral-400">
                        <span>CONTRAST</span>
                        <span>{portfolioContrast.toFixed(2)}x</span>
                      </div>
                      <input 
                        type="range" 
                        min="0.8" 
                        max="1.6" 
                        step="0.05"
                        value={portfolioContrast}
                        onChange={(e) => setPortfolioContrast(parseFloat(e.target.value))}
                        className="w-full accent-amber-500 h-1 bg-neutral-800 rounded-lg cursor-pointer"
                      />
                    </div>

                    <div className="flex flex-col gap-1">
                      <div className="flex justify-between font-mono text-[8px] text-neutral-400">
                        <span>BRIGHTNESS</span>
                        <span>{portfolioBrightness.toFixed(2)}x</span>
                      </div>
                      <input 
                        type="range" 
                        min="0.7" 
                        max="1.3" 
                        step="0.05"
                        value={portfolioBrightness}
                        onChange={(e) => setPortfolioBrightness(parseFloat(e.target.value))}
                        className="w-full accent-amber-500 h-1 bg-neutral-800 rounded-lg cursor-pointer"
                      />
                    </div>
                  </div>

                  <button 
                    onClick={() => { setPortfolioContrast(1.1); setPortfolioBrightness(1.0); }}
                    className="mt-2 py-2 border border-neutral-800 hover:border-neutral-700 bg-neutral-950 rounded-lg font-mono text-[8px] font-bold uppercase tracking-widest text-neutral-400 hover:text-white transition-colors cursor-pointer"
                  >
                    Reset adjustments
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
