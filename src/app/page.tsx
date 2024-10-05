'use client'

import { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Shirt, ShoppingBag, User, Undo, ChevronDown, ChevronUp } from "lucide-react"
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'
import Image from 'next/image'
import { ReactNode } from 'react'

interface Colors {
  peachFuzz: string;
  pastelPeach: string;
  pastelMint: string;
  pastelLavender: string;
  darkGrey: string;
  lightGrey: string;
}

interface Brand {
  name: string;
  url: string;
}

const colors  = {
  peachFuzz: '#FFBE98',
  pastelPeach: '#FFDAB9',
  pastelMint: '#C1FFC1',
  pastelLavender: '#E6E6FA',
  darkGrey: '#333333',
  lightGrey: '#666666',
}

const brandLogos = [
  { name: 'Zara', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Zara_Logo.svg/2560px-Zara_Logo.svg.png' },
  { name: 'H&M', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/2560px-H%26M-Logo.svg.png' },
  { name: 'Adidas', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/2560px-Adidas_Logo.svg.png' },
  { name: 'Gucci', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/1960s_Gucci_Logo.svg/2560px-1960s_Gucci_Logo.svg.png' },
  { name: 'Nike', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/1200px-Logo_NIKE.svg.png' },
]

const faqs = [
  {
    question: "How does Rampwalk know what I want?",
    answer: "No cap, our AI is like your bestie who just gets your vibe! We use some seriously lit algorithms to suss out your style and keep you looking fresh to death. It's like having a fashion psychic in your pocket, fr fr!"
  },
  {
    question: "How does it work?",
    answer: "It's easy peasy, fam! We kick things off with a quick lil' quiz to get your style 411. Then our AI goes beast mode, cooking up fits that'll make you look straight fire! Plus, you can snap pics of your drip to build your digital wardrobe. It's like Pokémon GO, but for your closet!"
  },
  {
    question: "How much is it?",
    answer: "Listen up, it's a straight steal! You can cop this drip for just $19.99 a month. But if you're bout that year-long grind, we'll hook you up for $150. That's like two months free, no cap! We're basically giving away clout at this point."
  },
  {
    question: "Are there additional perks?",
    answer: "You already know we got the hookup! Subscribers get access to exclusive drips, early dibs on new features, personalized style reports that'll blow your mind, and VIP customer support that's smoother than butter. We're always adding more sauce to keep your fashion game on point!"
  }
]

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  colors: {
    darkGrey: string;
    lightGrey: string;
  };
}

export default function LandingPage() {
  const [text, setText] = useState('')
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const fullText = "Your Wardrobe, Reimagined"
  const controls = useAnimation()

  useEffect(() => {
    let i = 0
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1))
        i++
      } else {
        clearInterval(typingInterval)
        controls.start({ opacity: 1, y: 0 })
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [controls])

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const handleJoinWaitlist = () => {
    console.log('Joining waitlist')
    // Add your waitlist logic here
  }

  return (
    <div style={{ backgroundColor: colors.peachFuzz, color: colors.darkGrey }} className="flex flex-col min-h-screen">
      <header className="p-4 flex justify-between items-center" style={{ borderBottom: `1px solid ${colors.darkGrey}` }}>
        <h1 className="text-3xl font-bold tracking-tighter">RAMP WALK</h1>
        <Button onClick={handleJoinWaitlist} className="hover:opacity-80 transition-opacity" style={{ backgroundColor: colors.darkGrey, color: colors.peachFuzz }}>
          Join Waitlist
        </Button>
      </header>

      <main className="flex-grow">
        <section className="relative min-h-screen flex items-center justify-center" style={{ background: `linear-gradient(to bottom, ${colors.peachFuzz}, ${colors.pastelPeach})` }}>
          <BackgroundAnimation colors={colors} />
          <div className="relative z-10 text-center px-4">
            <motion.h2
              className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight"
              style={{ color: colors.darkGrey }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {text}
              <motion.span
                className="inline-block w-[2px] h-[1em] ml-1"
                style={{ backgroundColor: colors.darkGrey }}
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
              />
            </motion.h2>
            <motion.p
              className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Slay all day with AI-powered fits and a digital wardrobe that is always on fleek!
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button onClick={handleJoinWaitlist} size="lg" className="text-xl px-8 py-6 hover:opacity-80 transition-opacity" style={{ backgroundColor: colors.darkGrey, color: colors.peachFuzz }}>
                Join Waitlist <ArrowRight className="ml-2" />
              </Button>
            </motion.div>
          </div>
        </section>

        <section className="py-16 px-4" style={{ background: `linear-gradient(to bottom, ${colors.peachFuzz}, ${colors.pastelMint})` }}>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Shirt className="w-12 h-12" />}
              title="Digital Inventory"
              description="Catalog your entire wardrobe in one place. Easy to manage and always accessible."
              colors={colors}
            />
            <FeatureCard
              icon={<Sparkles className="w-12 h-12" />}
              title="AI Style Suggestions"
              description="Get personalized outfit ideas based on your existing clothes and style preferences."
              colors={colors}
            />
            <FeatureCard
              icon={<ShoppingBag className="w-12 h-12" />}
              title="Complete the Look"
              description="Discover new pieces that perfectly complement your wardrobe with curated shopping suggestions."
              colors={colors}
            />
            <FeatureCard
              icon={<User className="w-12 h-12" />}
              title="AI Personal Shopper"
              description="Our AI learns more about you over time, styling you based on both current trends and your personal preferences."
              colors={colors}
            />
            <FeatureCard
              icon={<Shirt className="w-12 h-12" />}
              title="Virtual Try-On"
              description="See how outfits look on your custom avatar before you buy. Experiment with styles risk-free!"
              colors={colors}
            />
            <FeatureCard
              icon={<Undo className="w-12 h-12" />}
              title="Easy Returns"
              description="Don't like what you bought? We facilitate easy returns for your peace of mind."
              colors={colors}
            />
          </div>
        </section>

        <section className="py-16 px-4 bg-white">
          <h3 className="text-3xl font-bold mb-8 text-center" style={{ color: colors.darkGrey }}>More Rizz Powered By</h3>
          <BrandCarousel brands={brandLogos} />
        </section>

        <section className="py-16 px-4" style={{ background: `linear-gradient(to bottom, ${colors.peachFuzz}, ${colors.pastelLavender})` }}>
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold mb-8 text-center" style={{ color: colors.darkGrey }}>Frequently Asked Questions</h3>
            {faqs.map((faq, index) => (
              <div key={index} className="mb-4">
                <button
                  className="flex justify-between items-center w-full text-left p-4 rounded-lg"
                  style={{ backgroundColor: 'white', color: colors.darkGrey, border: `2px solid ${colors.darkGrey}` }}
                  onClick={() => toggleFaq(index)}
                >
                  <span className="text-lg font-semibold">{faq.question}</span>
                  {openFaq === index ? <ChevronUp /> : <ChevronDown />}
                </button>
                {openFaq === index && (
                  <div className="p-4 rounded-b-lg" style={{ backgroundColor: 'white', color: colors.lightGrey, borderTop: 'none' }}>
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="py-12 px-4 text-center">
          <Button onClick={handleJoinWaitlist} size="lg" className="text-xl px-8 py-6 hover:opacity-80 transition-opacity" style={{ backgroundColor: colors.darkGrey, color: colors.peachFuzz }}>
            Join Waitlist Now <ArrowRight className="ml-2" />
          </Button>
        </section>
      </main>

      <div className="py-8 flex justify-center space-x-6" style={{ backgroundColor: colors.peachFuzz }}>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity" style={{ color: colors.darkGrey }}>
          <FaFacebook size={24} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity" style={{ color: colors.darkGrey }}>
          <FaTwitter size={24} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity" style={{ color: colors.darkGrey }}>
          <FaInstagram size={24} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity" style={{ color: colors.darkGrey }}>
          <FaLinkedin size={24} />
        </a>
      </div>

      <footer className="py-8 px-4" style={{ backgroundColor: colors.peachFuzz, borderTop: `2px solid ${colors.darkGrey}` }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0" style={{ color: colors.darkGrey }}>&copy; 2024 Ramp Walk. All rights reserved.</p>
          <div className="flex flex-wrap justify-center space-x-4">
            <a href="#" className="text-sm hover:opacity-80 transition-opacity" style={{ color: colors.darkGrey }}>
              Privacy Policy
            </a>
            <a href="#" className="text-sm hover:opacity-80 transition-opacity" style={{ color: colors.darkGrey }}>
              Terms of Service
            </a>
            <a href="#" className="text-sm hover:opacity-80 transition-opacity" style={{ color: colors.darkGrey }}>
              Contact Us
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description, colors }: FeatureCardProps) {
  return (
    <motion.div
      className="p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
      style={{ backgroundColor: 'white', borderColor: colors.darkGrey, borderWidth: 1 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="mb-4" style={{ color: colors.darkGrey }}>{icon}</div>
      <h3 className="text-xl font-semibold mb-2" style={{ color: colors.darkGrey }}>{title}</h3>
      <p className="text-sm" style={{ color: colors.lightGrey }}>{description}</p>
    </motion.div>
  )
}

function BackgroundAnimation({ colors }:{ colors: Colors }) {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-20">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="peach-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"  stopColor={colors.peachFuzz} />
            <stop offset="50%" stopColor={colors.pastelPeach} />
            <stop offset="100%" stopColor={colors.peachFuzz} />
          </linearGradient>
        </defs>
        <g>
          <motion.path
            d="M10 90 Q 30 70 50 90 T 90 90"
            fill="none"
            stroke="url(#peach-gradient)"
            strokeWidth="4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: 'loop', ease: 'linear' }}
          />
        </g>
      </svg>
    </div>
  )
}

function BrandCarousel({ brands }: { brands: Brand[] }) {
  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex"
        animate={{
          x: [0, -100 * brands.length],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        }}
        style={{ width: `${brands.length * 300}px` }}
      >
        {brands.concat(brands).map((brand, index) => (
          <div key={index} className="w-[300px] flex items-center justify-center px-8">
            <Image src={brand.url} alt={brand.name} className="h-12 object-contain" style={{ filter: 'brightness(0)' }} />
          </div>
        ))}
      </motion.div>
    </div>
  )
}