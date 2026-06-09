"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardSeven from '@/components/sections/feature/FeatureCardSeven';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroSplitDualMedia from '@/components/sections/hero/HeroSplitDualMedia';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';
import { Award, Globe, HelpCircle, MessageCircle, Phone, Shield, Sparkles, Star, Users, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="shift-hover"
        defaultTextAnimation="entrance-slide"
        borderRadius="pill"
        contentWidth="mediumSmall"
        sizing="largeSmallSizeLargeTitles"
        background="noiseDiagonalGradient"
        cardStyle="subtle-shadow"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "Home",          id: "#home"},
        {
          name: "About",          id: "#about"},
        {
          name: "Services",          id: "#services"},
        {
          name: "Impact",          id: "#impact"},
        {
          name: "Clients",          id: "#clients"},
        {
          name: "Testimonials",          id: "#testimonials"},
        {
          name: "FAQ",          id: "#faq"},
        {
          name: "Contact",          id: "#contact"},
      ]}
      brandName="Genesis Communications Inc"
      bottomLeftText="Global Reach"
      bottomRightText="connect@genesis.com"
      button={{
        text: "Get Started"}}
    />
  </div>

  <div id="home" data-section="home">
      <HeroSplitDualMedia
      background={{
        variant: "plain"}}
      title="Elevate Your Voice. Amplify Your Impact."
      description="Unleash the full potential of your communication strategy with Genesis. We craft compelling narratives and deliver impactful messages that resonate with your audience and drive growth."
      tag="Future-Proof Communications"
      tagIcon={Zap}
      tagAnimation="slide-up"
      buttons={[
        {
          text: "Discover Solutions"},
        {
          text: "Get a Quote"},
      ]}
      buttonAnimation="slide-up"
      mediaItems={[
        {
          imageSrc: "https://img.b2bpic.net/premium-photo/man-using-smartphone-voice-assistant_220873-3662.jpg?id=13689064",          imageAlt: "futuristic communication network digital"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/high-tech-view-futuristic-earth_23-2151100329.jpg",          imageAlt: "holographic interface global data"}
      ]}
      mediaAnimation="slide-up"
      rating={5}
      ratingText="Trusted by Industry Leaders"
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={true}
      heading={[
        {
          type: "text",          content: "About Genesis Communications Inc"},
      ]}
      buttons={[
        {
          text: "Our Story"},
      ]}
      buttonAnimation="slide-up"
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardSeven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "Digital Strategy & Consulting",          description: "Craft bespoke digital communication blueprints tailored to your business objectives, ensuring maximum reach and engagement across all platforms.",          imageSrc: "http://img.b2bpic.net/free-photo/3d-abstract-dots-lines-connected_1048-11946.jpg",          imageAlt: "digital strategy illustration growth"},
        {
          title: "Content Creation & Marketing",          description: "From captivating narratives to visually stunning multimedia, we produce content that resonates with your audience and elevates your brand story.",          imageSrc: "https://img.b2bpic.net/free-photo/professional-microphone-blurred-background-sound-recording-concept_169016-23810.jpg?id=32293666",          imageAlt: "content creation multi-platform digital"},
        {
          title: "Media Relations & PR",          description: "Build strong relationships with key media outlets and amplify your message through strategic public relations campaigns that generate positive coverage.",          imageSrc: "https://img.b2bpic.net/premium-photo/teamwork-diversity-laptop-discussion-workplace-business-meeting-partnership-planning-men-women-technology-office-collaboration-brainstorming-performance-review_590464-354682.jpg?id=225706208",          imageAlt: "media relations public relations"},
        {
          title: "Crisis Communication Management",          description: "Navigate complex challenges with confidence. Our expert team provides rapid, strategic guidance to protect your reputation and maintain trust during critical times.",          imageSrc: "http://img.b2bpic.net/free-photo/business-analyst-does-presentation-with-project-updates-phone-call_482257-89712.jpg",          imageAlt: "crisis communication management digital"},
      ]}
      title="Our Core Communication Services"
      description="Driving innovation across all channels, our solutions are designed to make your message heard, seen, and remembered by the right people, at the right time."
      tag="Innovative Solutions"
      tagIcon={Sparkles}
      tagAnimation="slide-up"
    />
  </div>

  <div id="impact" data-section="impact">
      <MetricCardThree
      animationType="depth-3d"
      textboxLayout="default"
      useInvertedBackground={true}
      metrics={[
        {
          id: "1",          icon: Users,
          title: "Audience Reach Growth",          value: "6mil "},
        {
          id: "2",          icon: MessageCircle,
          title: "Add Partners Satisfaction ",          value: "95%"},
        {
          id: "3",          icon: Award,
          title: "Audience Satisfaction",          value: "98%"},
        {
          id: "4",          icon: Globe,
          title: "Conversion Rate ",          value: "130%"},
      ]}
      title="Impactful Results, Proven Success"
      description="Our data-driven approach delivers tangible results, helping clients achieve their communication goals and exceed expectations with precision and expertise."
      tag="Measurable Impact"
      tagIcon={Star}
      tagAnimation="slide-up"
    />
  </div>

  <div id="clients" data-section="clients">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "NFL",        "Yankees",        "Orlando Magic",        "March Madness",        "NCAA college football",        "Westwood One",        "Indy Car",        "WNBA"
      ]}
      title="Trusted by Industry Leaders"
      description="Our diverse portfolio of clients spans various sectors, united by a common goal: to communicate effectively and achieve lasting success through strategic partnerships."
      tag="Our Esteemed Partners"
      tagIcon={Shield}
      tagAnimation="slide-up"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTen
      textboxLayout="default"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "1",          title: "Game-Changing Media Strategy",          quote: "Genesis Communications inc redefined our sports media presence. Their innovative strategies brought our team's story to a global audience, driving unprecedented fan engagement.",          name: "Coach Alex 'The Tactician' Stone",          role: "Head Coach, National Basketball Team",          imageSrc: "https://img.b2bpic.net/free-photo/american-football-american-football-player-professional-sport-stadium_654080-301.jpg?id=27221872",          imageAlt: "basketball coach headshot"},
        {
          id: "2",          title: "Unlocking Athlete Potential",          quote: "With Genesis, my personal brand transcended the field. Their media relations expertise connected me with key platforms, allowing me to share my journey and inspire millions.",          name: "Mia 'The Goalscorer' Rodriguez",          role: "Professional Footballer",          imageSrc: "http://img.b2bpic.net/free-photo/portrait-handsome-fashion-businessman-model-dressed-elegant-blue-suit-with-glasses_158538-4406.jpg",          imageAlt: "female footballer professional portrait"},
        {
          id: "3",          title: "Seamless Event Coverage & PR",          quote: "Our major sporting event garnered massive media attention thanks to Genesis. Their PR team handled everything flawlessly, from press releases to on-site media management.",          name: "David 'The Visionary' Chen",          role: "Event Director, Global Sports League",          imageSrc: "http://img.b2bpic.net/free-photo/smiley-young-man-holding-tablet-mock-up_23-2148326968.jpg",          imageAlt: "event director male energetic"},
        {
          id: "4",          title: "Strategic Partnership Catalyst",          quote: "Genesis played a crucial role in securing our latest broadcast partnership. Their understanding of the sports media landscape is unparalleled, delivering true value.",          name: "Emily 'The Negotiator' Kim",          role: "Partnerships Lead, Sports Network",          imageSrc: "http://img.b2bpic.net/free-photo/middle-eastern-businessman-does-daily-tasks-corporate-job_482257-116713.jpg",          imageAlt: "partnerships lead female thoughtful"},
        {
          id: "5",          title: "Crisis Management in High Stakes",          quote: "When unexpected challenges arose, Genesis provided swift, expert guidance. Their crisis communication strategy protected our league's integrity and maintained public trust.",          name: "Robert 'The Commissioner' Jones",          role: "Commissioner, Pro Gaming Circuit",          imageSrc: "http://img.b2bpic.net/free-photo/modern-female-sitting-couch_23-2148415753.jpg",          imageAlt: "commissioner male portrait"},
        {
          id: "6",          title: "Innovative Fan Engagement Campaigns",          quote: "Our fan base has never been more engaged. Genesis's innovative campaigns created an electrifying connection between our team and our supporters, on and off the digital arena.",          name: "Jessica 'The Strategist' Lee",          role: "Marketing VP, Esports Organization",          imageSrc: "http://img.b2bpic.net/free-photo/senior-businessman-outside-modern-office-building_1139-1076.jpg",          imageAlt: "marketing VP female experienced"},
      ]}
      title="Champions' Voices: Our Partners Speak"
      description="Hear from leading sports organizations, athletes, and media partners on how Genesis Communications amplifies their message and elevates their brand in the competitive world of sports."
      tag="Our Sporting Success Stories"
      tagIcon={MessageCircle}
      tagAnimation="slide-up"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "1",          title: "What types of sports organizations do you work with?",          content: "We partner with a wide array of sports entities, including professional teams, leagues, individual athletes, sports media outlets, event organizers, and brands within the sports industry."},
        {
          id: "2",          title: "How do you secure media coverage for athletes and teams?",          content: "Our approach involves leveraging strong relationships with top-tier sports journalists, broadcasters, and digital platforms. We craft compelling narratives, provide exclusive access, and manage proactive pitching to ensure maximum visibility."},
        {
          id: "3",          title: "Can you help with athlete brand building and endorsement opportunities?",          content: "Yes, we specialize in enhancing athlete personal brands. We develop strategic content, manage social media presence, and connect athletes with relevant endorsement opportunities that align with their values and career goals."},
        {
          id: "4",          title: "What is your process for managing sports event PR?",          content: "For sports events, we handle all aspects of media relations, including press kit development, media accreditation, on-site press room management, interview coordination, and real-time news distribution to generate widespread coverage."},
        {
          id: "5",          title: "How do you facilitate partnerships within the sports industry?",          content: "We identify synergistic opportunities between brands, teams, and media. Our team brokers deals, manages negotiations, and develops integrated communication plans to ensure successful, mutually beneficial partnerships that drive growth and exposure."},
      ]}
      title="Frequently Asked Questions: Sports Media & Partnerships"
      description="Got questions about our specialized sports communication services, media outreach, or how we forge successful partnerships? Find quick answers here, or reach out to our team for a tailored discussion."
      tag="Sports Communication Q&A"
      tagIcon={HelpCircle}
      tagAnimation="slide-up"
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={true}
      background={{
        variant: "sparkles-gradient"}}
      tag="Partner with Genesis Sports"
      tagIcon={Phone}
      tagAnimation="slide-up"
      title="Elevate Your Game: Sports Media & Partnerships"
      description="Ready to make headlines, attract key sponsors, or amplify your sports brand? Genesis Communications Inc specializes in strategic sports media relations and forging powerful partnerships. Connect with our expert team for a winning strategy."
      buttons={[
        {
          text: "Inquire About Sports Partnerships"},
      ]}
      buttonAnimation="slide-up"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="https://img.b2bpic.net/premium-photo/video-editing_926199-2019146.jpg?id=176521385"
      imageAlt="futuristic city skyline night connectivity"
      logoText="Genesis Communications Inc"
      columns={[
        {
          title: "Solutions",          items: [
            {
              label: "Sports Digital Strategy",              href: "#services"},
            {
              label: "Athlete Content Creation",              href: "#services"},
            {
              label: "Sports Media Relations",              href: "#services"},
            {
              label: "Event Crisis Management",              href: "#services"},
          ],
        },
        {
          title: "Company",          items: [
            {
              label: "About Us",              href: "#about"},
            {
              label: "Our Impact",              href: "#impact"},
            {
              label: "Clients",              href: "#clients"},
            {
              label: "Testimonials",              href: "#testimonials"},
          ],
        },
        {
          title: "Support",          items: [
            {
              label: "FAQ",              href: "#faq"},
            {
              label: "Contact Us",              href: "#contact"},
            {
              label: "Privacy Policy",              href: "#"},
            {
              label: "Terms of Service",              href: "#"},
          ],
        },
      ]}
      copyrightText="© 2024 Genesis Communications Inc. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}