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
          name: "Home",
          id: "#home",
        },
        {
          name: "About",
          id: "#about",
        },
        {
          name: "Services",
          id: "#services",
        },
        {
          name: "Impact",
          id: "#impact",
        },
        {
          name: "Clients",
          id: "#clients",
        },
        {
          name: "Testimonials",
          id: "#testimonials",
        },
        {
          name: "FAQ",
          id: "#faq",
        },
        {
          name: "Contact",
          id: "#contact",
        },
      ]}
      brandName="Genesis Communications Inc"
      bottomLeftText="Global Reach"
      bottomRightText="connect@genesis.com"
      button={{
        text: "Get Started",
      }}
    />
  </div>

  <div id="home" data-section="home">
      <HeroSplitDualMedia
      background={{
        variant: "plain",
      }}
      title="Elevate Your Voice. Amplify Your Impact."
      description="Unleash the full potential of your communication strategy with Genesis. We craft compelling narratives and deliver impactful messages that resonate with your audience and drive growth."
      tag="Future-Proof Communications"
      tagIcon={Zap}
      tagAnimation="slide-up"
      buttons={[
        {
          text: "Discover Solutions",
        },
        {
          text: "Get a Quote",
        },
      ]}
      buttonAnimation="slide-up"
      mediaItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-optical-fiber-detail_23-2149182541.jpg",
          imageAlt: "futuristic communication network digital",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/high-tech-view-futuristic-earth_23-2151100329.jpg",
          imageAlt: "holographic interface global data",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/wet-glass-texture-background_557339-1026.jpg",
          imageAlt: "Wet glass texture background",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/2d-wallpaper-with-graphic-grainy-gradient-colors_23-2151001590.jpg",
          imageAlt: "2d wallpaper with graphic grainy gradient colors",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/gradient-background-with-pink-purple-light-effect_53876-103688.jpg",
          imageAlt: "Gradient background with pink and purple light effect",
        },
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
          type: "text",
          content: "About Genesis Communications Inc",
        },
      ]}
      buttons={[
        {
          text: "Our Story",
        },
      ]}
      buttonAnimation="slide-up"
      description="At Genesis, we believe in the transformative power of clear, compelling communication. Our mission is to empower businesses with innovative strategies and cutting-edge technology that bridge gaps, foster genuine connections, and drive measurable success in a dynamic global landscape."
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardSeven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "Digital Strategy & Consulting",
          description: "Craft bespoke digital communication blueprints tailored to your business objectives, ensuring maximum reach and engagement across all platforms.",
          imageSrc: "http://img.b2bpic.net/free-photo/3d-abstract-dots-lines-connected_1048-11946.jpg",
          imageAlt: "digital strategy illustration growth",
        },
        {
          title: "Content Creation & Marketing",
          description: "From captivating narratives to visually stunning multimedia, we produce content that resonates with your audience and elevates your brand story.",
          imageSrc: "http://img.b2bpic.net/free-photo/graphic-designer-photographer-collaborate-modern-studio_482257-126778.jpg",
          imageAlt: "content creation multi-platform digital",
        },
        {
          title: "Media Relations & PR",
          description: "Build strong relationships with key media outlets and amplify your message through strategic public relations campaigns that generate positive coverage.",
          imageSrc: "http://img.b2bpic.net/free-photo/black-lives-matter-text-top-view_23-2148913872.jpg",
          imageAlt: "media relations public relations",
        },
        {
          title: "Crisis Communication Management",
          description: "Navigate complex challenges with confidence. Our expert team provides rapid, strategic guidance to protect your reputation and maintain trust during critical times.",
          imageSrc: "http://img.b2bpic.net/free-photo/business-analyst-does-presentation-with-project-updates-phone-call_482257-89712.jpg",
          imageAlt: "crisis communication management digital",
        },
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
          id: "1",
          icon: Users,
          title: "Audience Reach Growth",
          value: "+150%",
        },
        {
          id: "2",
          icon: MessageCircle,
          title: "Engagement Rate Increase",
          value: "+45%",
        },
        {
          id: "3",
          icon: Award,
          title: "Client Satisfaction Score",
          value: "98%",
        },
        {
          id: "4",
          icon: Globe,
          title: "Market Penetration",
          value: "12 Countries",
        },
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
        "Tech Solutions Corp",
        "Global Innovate Ltd.",
        "Venture Capital Group",
        "Dynamic Media House",
        "Future Health Inc.",
        "Aqua Logistics",
        "Horizon Energy",
        "Apex Technologies",
        "Synergy Partners",
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
          id: "1",
          title: "Revolutionary Communication Strategy",
          quote: "Genesis Communications Inc transformed our outreach. Their strategic insights and execution have been nothing short of revolutionary, significantly boosting our brand's presence.",
          name: "Sarah Johnson",
          role: "CEO, TechCorp",
          imageSrc: "http://img.b2bpic.net/free-photo/businessman-solving-startup-problems-with-laptop-archived-documents-looking-annual-statistics-report-find-issue-young-analyst-reviewing-papers-executive-strategy-plan_482257-65811.jpg",
          imageAlt: "professional female CEO headshot",
        },
        {
          id: "2",
          title: "Unmatched Expertise in Digital Engagement",
          quote: "The team at Genesis is truly exceptional. Their deep understanding of digital engagement and ability to craft compelling content has driven incredible results for us.",
          name: "Michael Chen",
          role: "CTO, InnovateLab",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-handsome-fashion-businessman-model-dressed-elegant-blue-suit-with-glasses_158538-4406.jpg",
          imageAlt: "male CTO professional portrait",
        },
        {
          id: "3",
          title: "A Partner That Delivers",
          quote: "Working with Genesis Communications has been a game-changer. They are a reliable partner who consistently delivers high-quality work and tangible improvements to our communication.",
          name: "Emily Rodriguez",
          role: "Marketing Director, GrowthCo",
          imageSrc: "http://img.b2bpic.net/free-photo/smiley-young-man-holding-tablet-mock-up_23-2148326968.jpg",
          imageAlt: "marketing director female energetic",
        },
        {
          id: "4",
          title: "Innovative and Results-Oriented",
          quote: "Genesis brings an innovative approach to every project. Their strategies are fresh, impactful, and always focused on achieving clear, measurable outcomes.",
          name: "David Kim",
          role: "Product Manager, StartupXYZ",
          imageSrc: "http://img.b2bpic.net/free-photo/middle-eastern-businessman-does-daily-tasks-corporate-job_482257-116713.jpg",
          imageAlt: "product manager male thoughtful",
        },
        {
          id: "5",
          title: "Exceptional Support and Guidance",
          quote: "Beyond their outstanding results, Genesis Communications Inc provides unparalleled support and expert guidance, making every step of the process seamless and collaborative.",
          name: "Jessica Lee",
          role: "Head of PR, Global Brands",
          imageSrc: "http://img.b2bpic.net/free-photo/modern-female-sitting-couch_23-2148415753.jpg",
          imageAlt: "head of PR female portrait",
        },
        {
          id: "6",
          title: "Strategic Vision and Execution",
          quote: "Their strategic vision coupled with flawless execution sets Genesis apart. They understood our complex needs and delivered a communication plan that truly resonated.",
          name: "Robert Davis",
          role: "Senior Consultant, CorporateEdge",
          imageSrc: "http://img.b2bpic.net/free-photo/senior-businessman-outside-modern-office-building_1139-1076.jpg",
          imageAlt: "senior consultant male experienced",
        },
      ]}
      title="What Our Clients Say About Us"
      description="Hear directly from the businesses we've helped transform their communication strategies and achieve remarkable growth in competitive markets."
      tag="Client Success Stories"
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
          id: "1",
          title: "What types of businesses do you work with?",
          content: "We partner with a diverse range of businesses, from burgeoning startups to established enterprises, across various industries seeking to enhance their communication strategies.",
        },
        {
          id: "2",
          title: "How do you measure the success of your communication strategies?",
          content: "We utilize a blend of quantitative and qualitative metrics, including audience reach, engagement rates, sentiment analysis, lead generation, and brand perception shifts, tailored to your specific goals.",
        },
        {
          id: "3",
          title: "What is your approach to crisis communication?",
          content: "Our crisis communication approach is proactive and responsive. We develop robust plans, offer real-time monitoring, and provide swift, strategic guidance to manage narratives and mitigate reputational risks effectively.",
        },
        {
          id: "4",
          title: "Can you integrate with our existing marketing team?",
          content: "Absolutely. We pride ourselves on collaborative partnerships. Our services are designed to complement and empower your in-house team, ensuring seamless integration and shared success.",
        },
      ]}
      title="Frequently Asked Questions"
      description="Got questions about our services, process, or how we can help your business thrive? Find quick answers here, or reach out to our team for personalized assistance."
      tag="Instant Answers"
      tagIcon={HelpCircle}
      tagAnimation="slide-up"
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={true}
      background={{
        variant: "sparkles-gradient",
      }}
      tag="Connect With Us"
      tagIcon={Phone}
      tagAnimation="slide-up"
      title="Ready to Transform Your Communication?"
      description="Let's discuss how Genesis Communications Inc can empower your brand with cutting-edge strategies and impactful messaging. Reach out today for a personalized consultation and take the first step towards amplified success."
      buttons={[
        {
          text: "Get in Touch",
        },
      ]}
      buttonAnimation="slide-up"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="http://img.b2bpic.net/free-photo/medium-shot-girls-with-smartphone_23-2149334002.jpg"
      imageAlt="futuristic city skyline night connectivity"
      logoText="Genesis Communications Inc"
      columns={[
        {
          title: "Solutions",
          items: [
            {
              label: "Digital Strategy",
              href: "#services",
            },
            {
              label: "Content Creation",
              href: "#services",
            },
            {
              label: "Media Relations",
              href: "#services",
            },
            {
              label: "Crisis Management",
              href: "#services",
            },
          ],
        },
        {
          title: "Company",
          items: [
            {
              label: "About Us",
              href: "#about",
            },
            {
              label: "Our Impact",
              href: "#impact",
            },
            {
              label: "Clients",
              href: "#clients",
            },
            {
              label: "Testimonials",
              href: "#testimonials",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "FAQ",
              href: "#faq",
            },
            {
              label: "Contact Us",
              href: "#contact",
            },
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms of Service",
              href: "#",
            },
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
