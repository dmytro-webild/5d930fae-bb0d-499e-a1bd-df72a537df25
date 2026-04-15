"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroSplitKpi from '@/components/sections/hero/HeroSplitKpi';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-stagger"
        defaultTextAnimation="background-highlight"
        borderRadius="rounded"
        contentWidth="medium"
        sizing="largeSmallSizeMediumTitles"
        background="grid"
        cardStyle="soft-shadow"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="solid"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Home",
          id: "#hero",
        },
        {
          name: "Shop",
          id: "#products",
        },
        {
          name: "Benefits",
          id: "#features",
        },
        {
          name: "Contact",
          id: "#contact",
        },
      ]}
      brandName="TrendStyle"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitKpi
      background={{
        variant: "gradient-bars",
      }}
      title="Style That Speaks Volume"
      description="Discover curated collections of watches, shoes, and apparel at unbeatable prices. Your journey to premium style starts here."
      kpis={[
        {
          value: "10k+",
          label: "Happy Customers",
        },
        {
          value: "200+",
          label: "Styles Weekly",
        },
        {
          value: "4.9",
          label: "Rating Score",
        },
      ]}
      enableKpiAnimation={true}
      imageSrc="http://img.b2bpic.net/free-photo/still-life-spring-wardrobe-switch_23-2150478953.jpg"
      mediaAnimation="slide-up"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/clothes-bed-fast-fashion-concept-high-angle_23-2149726121.jpg",
          alt: "Customer 1",
        },
        {
          src: "http://img.b2bpic.net/free-photo/digital-art-style-fashion-design-sketch-paper_23-2151487073.jpg",
          alt: "Customer 2",
        },
        {
          src: "http://img.b2bpic.net/free-photo/lifestyle-leisure-recreation-activity-icon_53876-21314.jpg",
          alt: "Customer 3",
        },
        {
          src: "http://img.b2bpic.net/free-photo/top-view-tablet-surrounded-by-accesories_23-2148135550.jpg",
          alt: "Customer 4",
        },
        {
          src: "http://img.b2bpic.net/free-photo/man-standing-front-motorbike-using-smartphone_23-2147860935.jpg",
          alt: "Customer 5",
        },
      ]}
      avatarText="Join 10,000+ satisfied trendsetters"
      marqueeItems={[
        {
          type: "text",
          text: "Premium Quality",
        },
        {
          type: "text",
          text: "Latest Trends",
        },
        {
          type: "text",
          text: "Secure Checkout",
        },
        {
          type: "text",
          text: "Fast Shipping",
        },
        {
          type: "text",
          text: "Easy Returns",
        },
      ]}
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="one-large-left-three-stacked-right"
      useInvertedBackground={false}
      products={[
        {
          id: "1",
          name: "Classic Minimal Watch",
          price: "$129",
          imageSrc: "http://img.b2bpic.net/free-photo/man-looking-watch-his-hand_158595-3821.jpg",
        },
        {
          id: "2",
          name: "Urban Leather Sneakers",
          price: "$89",
          imageSrc: "http://img.b2bpic.net/free-photo/vertical-shot-young-female-red-dress-talks-mobile-telephone-outdoors_181624-52966.jpg",
        },
        {
          id: "3",
          name: "Premium Cotton Shirt",
          price: "$45",
          imageSrc: "http://img.b2bpic.net/free-photo/full-shot-man-walking-church_23-2150755567.jpg",
        },
        {
          id: "4",
          name: "Pro Training Shoes",
          price: "$110",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-stylish-footwear_23-2148320247.jpg",
        },
        {
          id: "5",
          name: "Luxury Leather Wallet",
          price: "$65",
          imageSrc: "http://img.b2bpic.net/free-photo/flat-lay-storage-devices-bed_23-2149319354.jpg",
        },
        {
          id: "6",
          name: "Summer Casual Tee",
          price: "$35",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-young-attractive-smiling-modern-stylish-man-casual-cloth-hat-sunglasses-standing-near-wall_158538-14088.jpg",
        },
      ]}
      title="Shop Our Best Sellers"
      description="Handpicked accessories and apparel curated for the modern trendsetter."
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardOne
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      features={[
        {
          title: "Rapid Delivery",
          description: "Get your favorite styles delivered to your doorstep in record time.",
          imageSrc: "http://img.b2bpic.net/free-photo/delivery-boxes-watches-with-santa-hat-optimization-delivery-logistics-transport-company_493343-29831.jpg",
        },
        {
          title: "Secure Payments",
          description: "Shop with peace of mind using our encrypted payment gateways.",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-lock-with-credit-cards-password_23-2148578099.jpg",
        },
        {
          title: "Quality Assured",
          description: "Every item undergoes rigorous quality checks before it leaves our facility.",
          imageSrc: "http://img.b2bpic.net/free-photo/business-man-showing-ok-sign_23-2148479592.jpg",
        },
      ]}
      title="Why TrendStyle?"
      description="We blend quality, speed, and trust to deliver a superior shopping experience."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwo
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Sarah Miller",
          role: "Creative Lead",
          testimonial: "The quality of these products is simply unmatched for the price point.",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-films-vlog-praising-bio-local-shop_482257-81629.jpg",
        },
        {
          id: "2",
          name: "David Chan",
          role: "Fashion Blogger",
          testimonial: "Finally, a store that stays on top of the latest trends perfectly.",
          imageSrc: "http://img.b2bpic.net/free-photo/aged-woman-red-wear-with-upped-hands_23-2148036513.jpg",
        },
        {
          id: "3",
          name: "Emily Russo",
          role: "Designer",
          testimonial: "Super fast shipping and everything I bought fit perfectly. Highly recommend!",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-woman-with-carnival-mask_23-2148044172.jpg",
        },
        {
          id: "4",
          name: "Mark Wilson",
          role: "Marketing Pro",
          testimonial: "The buying experience was seamless and the wallet I bought looks incredible.",
          imageSrc: "http://img.b2bpic.net/free-photo/surprised-girl-with-laptop-girl-laptop-technology-concept_169016-64954.jpg",
        },
        {
          id: "5",
          name: "Jenna Foster",
          role: "Architect",
          testimonial: "TrendStyle is my new go-to for quality apparel and daily essentials.",
          imageSrc: "http://img.b2bpic.net/free-photo/rebel-model-posing-studio_23-2148376748.jpg",
        },
      ]}
      title="Loved by Shoppers"
      description="Hear what our style-forward community says about their experience."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={true}
      title="Get In Touch"
      description="Questions about our products or your orders? We're here to help."
      inputs={[
        {
          name: "name",
          type: "text",
          placeholder: "Your Name",
          required: true,
        },
        {
          name: "email",
          type: "email",
          placeholder: "Email Address",
          required: true,
        },
      ]}
      textarea={{
        name: "message",
        placeholder: "How can we assist you?",
        rows: 4,
        required: true,
      }}
      imageSrc="http://img.b2bpic.net/free-photo/copy-space-family-separation-paper_23-2148536052.jpg"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoText="TrendStyle"
      copyrightText="© 2025 | TrendStyle. All rights reserved."
      socialLinks={[
        {
          icon: Instagram,
          href: "https://instagram.com",
          ariaLabel: "Instagram",
        },
        {
          icon: Twitter,
          href: "https://twitter.com",
          ariaLabel: "Twitter",
        },
        {
          icon: Facebook,
          href: "https://facebook.com",
          ariaLabel: "Facebook",
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
