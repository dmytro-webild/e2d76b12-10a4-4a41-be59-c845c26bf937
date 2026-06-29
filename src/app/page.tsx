"use client";

import { ThemeProvider } from '@/providers/themeProvider/ThemeProvider';
import ReactLenis from 'lenis/react';
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardSeven from '@/components/sections/feature/FeatureCardSeven';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroSplitDualMedia from '@/components/sections/hero/HeroSplitDualMedia';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import NavbarFloatingLogo from '@/components/ui/NavbarFloatingLogo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';
import { Award, Globe, HelpCircle, MessageCircle, Phone, Shield, Sparkles, Star, Users, Zap } from "lucide-react";
import { ContactCta } from '@/components/sections/contact/ContactCta';

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
      <NavbarFloatingLogo
      logo="Genesis Communications Inc"
      navItems={[
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Services", href: "#services" },
        { name: "Impact", href: "#impact" },
        { name: "Clients", href: "#clients" },
        { name: "Testimonials", href: "#testimonials" },
        { name: "FAQ", href: "#faq" },
        { name: "Contact", href: "#contact" },
      ]}
      ctaButton={{ text: "Get Started", href: "#contact" }}
    />
  </div>

  <div id="home" data-section="home">
      <HeroSplitDualMedia
      background={{ variant: "plain" }}
      title="Elevate Your Voice. Amplify Your Impact."
      description="Unleash the full potential of your communication strategy with Genesis. We craft compelling narratives and deliver impactful messages that resonate with your audience and drive growth."
      tag="Future-Proof Communications"
      tagIcon={Zap}
      tagAnimation="slide-up"
      buttons={[
        { text: "Discover Solutions", href: "#services" },
        { text: "Get a Quote", href: "#contact" },
      ]}
      buttonAnimation="slide-up"
      mediaItems={[
        { imageSrc: "https://img.b2bpic.net/premium-photo/man-using-smartphone-voice-assistant_220873-3662.jpg?id=13689064" },
        { imageSrc: "http://img.b2bpic.net/free-photo/high-tech-view-futuristic-earth_23-2151100329.jpg" }
      ]}
      mediaAnimation="slide-up"
      rating={5}
      ratingText="Trusted by Industry Leaders"
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={true}
      heading={[{ type: "text", content: "About Genesis Communications Inc" }]}
      buttons={[{ text: "Our Story", href: "#" }]}
      buttonAnimation="slide-up"
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardSeven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        { title: "Digital Strategy & Consulting", description: "Craft bespoke digital communication blueprints tailored to your business objectives.", imageSrc: "http://img.b2bpic.net/free-photo/3d-abstract-dots-lines-connected_1048-11946.jpg" },
        { title: "Content Creation & Marketing", description: "From captivating narratives to visually stunning multimedia.", imageSrc: "https://img.b2bpic.net/free-photo/professional-microphone-blurred-background-sound-recording-concept_169016-23810.jpg?id=32293666" },
        { title: "Media Relations & PR", description: "Build strong relationships with key media outlets.", imageSrc: "https://img.b2bpic.net/premium-photo/teamwork-diversity-laptop-discussion-workplace-business-meeting-partnership-planning-men-women-technology-office-collaboration-brainstorming-performance-review_590464-354682.jpg?id=225706208" },
        { title: "Crisis Communication Management", description: "Navigate complex challenges with confidence.", imageSrc: "http://img.b2bpic.net/free-photo/business-analyst-does-presentation-with-project-updates-phone-call_482257-89712.jpg" },
      ]}
      title="Our Core Communication Services"
      description="Driving innovation across all channels, our solutions are designed to make your message heard."
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
        { id: "1", icon: Users, title: "Audience Reach Growth", value: "6mil" },
        { id: "2", icon: MessageCircle, title: "Partners Satisfaction", value: "95%" },
        { id: "3", icon: Award, title: "Audience Satisfaction", value: "98%" },
        { id: "4", icon: Globe, title: "Conversion Rate", value: "130%" },
      ]}
      title="Impactful Results, Proven Success"
      description="Our data-driven approach delivers tangible results."
      tag="Measurable Impact"
      tagIcon={Star}
      tagAnimation="slide-up"
    />
  </div>

  <div id="clients" data-section="clients">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={["NFL", "Yankees", "Orlando Magic", "NCAA Football", "Fox News"]}
      title="Trusted by Industry Leaders"
      description="Our diverse portfolio spans various sectors."
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
        { id: "1", title: "Game-Changing Media Strategy", quote: "Genesis redefined our sports media presence.", name: "Coach Alex", role: "Head Coach", imageSrc: "https://img.b2bpic.net/free-photo/american-football-american-football-player-professional-sport-stadium_654080-301.jpg?id=27221872" },
        { id: "2", title: "Unlocking Athlete Potential", quote: "My brand transcended the field.", name: "Mia Rodriguez", role: "Footballer", imageSrc: "http://img.b2bpic.net/free-photo/portrait-handsome-fashion-businessman-model-dressed-elegant-blue-suit-with-glasses_158538-4406.jpg" },
      ]}
      title="Champions' Voices"
      description="Hear from our partners."
      tag="Success Stories"
      tagIcon={MessageCircle}
      tagAnimation="slide-up"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        { id: "1", title: "Who do you work with?", content: "Professional teams and athletes." },
        { id: "2", title: "How do we start?", content: "Contact our team today." },
      ]}
      title="Frequently Asked Questions"
      description="Find quick answers here."
      tag="Q&A"
      tagIcon={HelpCircle}
      tagAnimation="slide-up"
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCta
      tag="Get In Touch"
      text="To get started, please fill out your name, contact information, and ensure you review our <a href='/privacy' class='underline'>Privacy Policy</a> and <a href='/terms' class='underline'>Terms & Conditions</a>. By checking the boxes below, you consent to receive SMS communications regarding your inquiry."
      primaryButton={{ text: "Submit Inquiry", href: "#" }}
      secondaryButton={{ text: "Need Help?", href: "#" }}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="https://img.b2bpic.net/premium-photo/video-editing_926199-2019146.jpg?id=176521385"
      imageAlt="footer image"
      logoText="Genesis Communications Inc"
      columns={[
        { title: "Solutions", items: [{ label: "Strategy", href: "#services" }] },
        { title: "Company", items: [{ label: "About", href: "#about" }] },
      ]}
      copyrightText="© 2024 Genesis Communications Inc."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
