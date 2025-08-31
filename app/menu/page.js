'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState('broths')

  const menuData = {
    broths: {
      title: 'Broths',
      subtitle: 'Choose from our signature hot pot broths',
      items: [
        { 
          name: 'Signature Mala Tang Broth', 
          chineseName: '招牌麻辣烫汤底',
          description: 'Our Signature Broth Is Prepared With Sichuan Peppercorns, Chili, Garlic, And Secret Spices. Topped With Your Ingredients For A Fiery Authentic Experience.',
          image: '/assets/images/Signature Mala Tang Broth.png',
          spicy: true 
        },
        { 
          name: 'Golden Chicken Broth', 
          chineseName: '金汤鸡汤底',
          description: 'A Rich, Creamy, And Nourishing Broth Infused With Organic Chicken, Offering Deep Savory Flavor And Natural Sweetness Comforting And Nourishing.',
          image: '/assets/images/Golden Chicken Broth.png'
        },
        { 
          name: 'Tom Yum Broth', 
          chineseName: '冬阴功汤底',
          description: 'A Tangy Thai Broth Bursting With Lemongrass, Lime, And A Touch Of Spice. Perfectly Balanced And Refreshing At Once.',
          image: '/assets/images/Tom Yum Broth.png',
          spicy: true 
        },
        { 
          name: 'Singapore Laksa Broth', 
          chineseName: '新加坡叻沙汤底',
          description: 'Creamy And Rich Singapore-Style Broth Infused With Coconut Milk, Curry Paste, And Southeast Asian Herbs. A True Comfort Broth With A Tropical Twist.',
          image: '/assets/images/Singapore Laksa Broth.png',
          spicy: true 
        },
        { 
          name: 'Sacha Broth', 
          chineseName: '沙茶汤底',
          description: 'A Rich And Aromatic Broth Flavored With Soy Garlic, And The Famous Shacha (Satay) Sauce. Smoky, Nutty, And Packed With Umami.',
          image: '/assets/images/Sacha Broth.png'
        },
        { 
          name: 'Japanese Black Garlic Broth', 
          chineseName: '日式黑蒜汤底',
          description: 'Deep And Earthy With A Hint Of Sweetness, This Rich Garlic Broth Includes Black Garlic, With Savory Japanese Stock For A Smooth, Rich Experience.',
          image: '/assets/images/Japanese Black Garlic Broth.png'
        },
        { 
          name: 'Japanese Miso Broth', 
          chineseName: '日式味噌汤底',
          description: 'A Comforting Classic Made With Fermented Miso Paste For Rich, Full-Bodied, Balanced Umami With A Mellow Sweetness - Light Yet Satisfying.',
          image: '/assets/images/Japanese Miso Broth.png'
        },
        { 
          name: 'Fresh Tomato Broth', 
          chineseName: '鲜番茄汤底',
          description: 'Bright And Tangy With Natural Sweetness Harvested From Fresh Ripe Tomatoes. A Light Option That Pairs Beautifully With Seafood And Veggies.',
          image: '/assets/images/Fresh Tomato Broth.png'
        },
        { 
          name: 'Thai Curry Broth', 
          chineseName: '泰式咖喱汤底',
          description: 'Creamy And Aromatic With A Mix Of Coconut Milk, Red Curry Paste, And Thai Spices. A Warming Embrace Of Sweet, Spicy And Savory.',
          image: '/assets/images/Thai Curry Broth.png',
          spicy: true 
        },
        { 
          name: 'Spicy Szechuan Dry Mix', 
          chineseName: '四川干拌',
          description: 'Hot & Spicy But A Bold Seasoning Mix Of Szechuan Peppercorns, Chili, Garlic, And Secret Spices. Tossed With Your Ingredients For A Fiery Dry-Style Experience.',
          image: '/assets/images/Spicy Szechuan Dry Mix.png',
          spicy: true 
        },
        { 
          name: 'Mushroom Vegan Broth', 
          chineseName: '素食菌菇汤底',
          description: 'A Healthy And Flavorful Plant-Based Broth Made From Shiitake, Enoki, And Other Mushrooms. Earthy, Light, And Full Of Umami.',
          image: '/assets/images/Mushroom Vegan Broth.png',
          vegan: true 
        },
        { 
          name: 'Veggie Broth Ma La Tang', 
          chineseName: '素食麻辣烫汤底',
          description: 'Plant-Based Version Of Our Signature Mala Tang With All The Spice And Flavor, Made With Vegetable Stock And Authentic Sichuan Seasonings.',
          image: '/assets/images/Veggie Broth Ma La Tang.png',
          vegan: true, 
          spicy: true 
        },
        { 
          name: 'Veggie Mixed Mushroom', 
          chineseName: '素食杂菌汤底',
          description: 'A Rich Blend Of Multiple Mushroom Varieties Creating A Deep, Earthy, And Satisfying Plant-Based Broth With Complex Umami Flavors.',
          image: '/assets/images/Veggie Mixed Mushroom.png',
          vegan: true 
        },
        { 
          name: 'Veggie Broth Black Garlic', 
          chineseName: '素食黑蒜汤底',
          description: 'Plant-Based Black Garlic Broth With The Same Rich, Sweet, And Earthy Flavors As Our Original, Made With Vegetable Stock.',
          image: '/assets/images/Veggie Broth Black Garlic.png',
          vegan: true 
        },
        { 
          name: 'Veggie Broth - Miso Broth', 
          chineseName: '素食味噌汤底',
          description: 'Traditional Japanese Miso Flavors In A Completely Plant-Based Broth, Light Yet Full Of Satisfying Umami Goodness.',
          image: '/assets/images/Veggie Broth - Miso Broth.png',
          vegan: true 
        },
        { 
          name: 'Veggie Broth - Sacha Broth', 
          chineseName: '素食沙茶汤底',
          description: 'Plant-Based Version Of Our Popular Sacha Broth, Maintaining All The Nutty, Smoky, And Aromatic Qualities In A Vegan-Friendly Base.',
          image: '/assets/images/Veggie Broth - Sacha Broth.png',
          vegan: true 
        },
        { 
          name: 'Veggie Broth Thai Curry', 
          chineseName: '素食泰式咖喱汤底',
          description: 'Creamy Coconut-Based Thai Curry Broth With Authentic Spices And Aromatics, Completely Plant-Based But Full Of Traditional Flavors.',
          image: '/assets/images/Veggie Broth Thai Curry.png',
          vegan: true, 
          spicy: true 
        }
      ]
    },
    drinks: {
      title: 'Drinks',
      subtitle: 'Fresh beverages and specialty drinks',
      items: [
        // Slushie Series
        { name: 'Pinacolada Slushie', price: 6.75, category: 'Slushie Series', popular: true },
        { name: 'Fresh Mango Slushie', price: 6.75, category: 'Slushie Series', popular: true },
        { name: 'Fresh Strawberry Slushie', price: 6.75, category: 'Slushie Series' },
        { name: 'Fresh Banana Milk Slushie', price: 6.75, category: 'Slushie Series' },
        { name: 'Fresh Strawberry Mango Slushie', price: 6.75, category: 'Slushie Series' },
        { name: 'Fresh Strawberry Banana Slushie', price: 6.75, category: 'Slushie Series' },
        { name: 'Fresh Whole Avocado Slushie', price: 6.75, category: 'Slushie Series', popular: true },
        { name: 'Fresh Avocado Matcha Slushie', price: 6.75, category: 'Slushie Series' },
        { name: 'Oreo Cookies and Cream Slushie', price: 6.75, category: 'Slushie Series', popular: true },
        { name: 'Lychee Slushie', price: 6.75, category: 'Slushie Series' },
        { name: 'Honeydew Slushie', price: 6.75, category: 'Slushie Series' },
        
        // Milktea Series
        { name: 'Original Milktea', price: 6.50, category: 'Milktea Series' },
        { name: 'Brown Sugar Milktea', price: 6.50, category: 'Milktea Series', popular: true },
        { name: 'Taro Milktea', price: 6.50, category: 'Milktea Series', popular: true },
        { name: 'Coconut Milktea', price: 6.50, category: 'Milktea Series' },
        { name: 'Strawberry Milktea', price: 6.50, category: 'Milktea Series' },
        { name: 'Mango Milktea', price: 6.50, category: 'Milktea Series' },
        { name: 'Matcha Milktea', price: 6.50, category: 'Milktea Series', popular: true },
        { name: 'Thai Milktea', price: 6.50, category: 'Milktea Series', popular: true },
        
        // Sparkling
        { name: 'Mango Sparkling', price: 5.50, category: 'Sparkling' },
        { name: 'Peach Sparkling', price: 5.50, category: 'Sparkling', popular: true },
        { name: 'Strawberry Sparkling', price: 5.50, category: 'Sparkling', popular: true },
        { name: 'Lychee Sparkling', price: 5.50, category: 'Sparkling' },
        { name: 'Passionfruit Sparkling', price: 5.50, category: 'Sparkling' },
        
        // Fruit Tea
        { name: 'Fruit Tea (Black/Green)', price: 5.75, category: 'Fruit Tea' },
        { name: 'Passionfruit Tea', price: 5.75, category: 'Fruit Tea' },
        { name: 'Passionfruit Pineapple Tea', price: 5.75, category: 'Fruit Tea' },
        { name: 'Mango Pineapple Tea', price: 5.75, category: 'Fruit Tea' },
        { name: 'Strawberry Mango Tea', price: 5.75, category: 'Fruit Tea' },
        { name: 'Fresh Lime Lemon Tea', price: 5.75, category: 'Fruit Tea' },
        
        // Lemonade
        { name: 'Original Lemonade', price: 5.50, category: 'Lemonade', popular: true },
        { name: 'Mango Lemonade', price: 5.50, category: 'Lemonade' },
        { name: 'Peach Lemonade', price: 5.50, category: 'Lemonade' },
        { name: 'Strawberry Lemonade', price: 5.50, category: 'Lemonade' },
        { name: 'Lychee Lemonade', price: 5.50, category: 'Lemonade' },
        { name: 'Passionfruit Lemonade', price: 5.50, category: 'Lemonade' }
      ]
    },
    meatballs: {
      title: 'Meatballs & Seafood Balls',
      subtitle: 'Fresh handmade balls and seafood selections',
      items: [
        { name: 'Beef Ball (2 PC)', price: 1.99 },
        { name: 'Mushroom Pork Ball (2 PC)', price: 1.99 },
        { name: 'Cuttlefish (2 PC)', price: 2.49 },
        { name: 'Chicken Ball (2 PC)', price: 1.99 },
        { name: 'Lobster Ball (3 PC)', price: 1.99 },
        { name: 'Imitation Snow Crab Leg (5 PC)', price: 2.49 },
        { name: 'Crab (Half)', price: 3.99 },
        { name: 'Scallop (10 PC)', price: 1.99 },
        { name: 'Mini Sausage (5 PC)', price: 1.99 },
        { name: 'Squid Ring (3 PC)', price: 2.49 },
        { name: 'Pork Ball (2 PC)', price: 1.99 },
        { name: 'Creamy Lobster Ball (2 PC)', price: 1.99 },
        { name: 'Fuzhou Fish Ball (2 PC)', price: 1.99 },
        { name: 'Squid Roll (3 PC)', price: 2.49 },
        { name: 'Octopus Fish Ball (1 PC)', price: 1.99 },
        { name: 'Whole Shrimp Egg Dumpling (3 PC)', price: 2.49 },
        { name: 'Fish Tofu (3 PC)', price: 1.99 },
        { name: 'Taro Fish Ball (2 PC)', price: 1.99 },
        { name: 'Grilled Fish Roll (3 PC)', price: 1.99 },
        { name: 'Fish Ball with Cheese (2 PC)', price: 1.99 },
        { name: 'Mini Octopus (2 PC)', price: 2.49 },
        { name: 'Salted Egg Lava Fish Ball (2 PC)', price: 1.99 },
        { name: 'Mochi (2 PC)', price: 1.99 },
        { name: 'Fortune Bag (2 PC)', price: 2.49 },
        { name: 'Mussels (2 PC)', price: 2.49 },
        { name: 'White Fish Ball (3 PC)', price: 1.99 },
        { name: 'Snakehead Fish Slice (5 PC)', price: 2.49 },
        { name: 'Basa Fish Fillet (3 PC)', price: 3.99 },
        { name: 'Abalone (Each)', price: 3.99 }
      ]
    },
    meats: {
      title: 'Meats',
      subtitle: 'Premium cuts and specialty meat selections',
      items: [
        { name: 'Deluxe Lamb Roll (100 g)', price: 4.19 },
        { name: 'Beef Tripe (50 g)', price: 2.49 },
        { name: 'Garlic Sausage (5 PC)', price: 2.49 },
        { name: 'House Special Chicken (100 g)', price: 4.19 },
        { name: 'Premium Pork Shoulder (100 g)', price: 4.19 },
        { name: 'Beef Artery (50 g)', price: 2.49 },
        { name: 'Mini Smoky Sausage (3 PC)', price: 2.49 },
        { name: 'Black Pepper Duck Breast (3 PC)', price: 2.49 },
        { name: 'Luncheon Pork (2 PC)', price: 2.49 },
        { name: 'Premium Pork Belly (100 g)', price: 4.19 },
        { name: 'Quail Egg (6 PC)', price: 2.49 },
        { name: 'Deluxe Beef Roll (100 g)', price: 4.19 },
        { name: 'Peeled Shrimp (4 PC)', price: 4.19 }
      ]
    },
    vegetables: {
      title: 'Vegetables',
      subtitle: 'Fresh vegetables and plant-based options',
      items: [
        { name: 'Crown Daisy (50 g)', price: 1.99 },
        { name: 'Mushroom (7 PC)', price: 2.49 },
        { name: 'Broccoli (3 PC)', price: 1.99 },
        { name: 'Lotus Root (2 PC)', price: 1.99 },
        { name: 'Spinach (50 g)', price: 1.99 },
        { name: 'Oyster Mushroom (5 PC)', price: 2.49 },
        { name: 'Cauliflower (3 PC)', price: 1.99 },
        { name: 'Potato (4 PC)', price: 1.99 },
        { name: 'Seafood Mushroom (8 PC)', price: 2.49 },
        { name: 'Winter Melon (3 PC)', price: 1.99 },
        { name: 'Konjac Vegan Tripe (3 PC)', price: 1.99 },
        { name: 'Lettuce (50 g)', price: 1.99 },
        { name: 'Enoki Mushroom (50 g)', price: 2.49 },
        { name: 'Baby Corn (5 PC)', price: 2.49 },
        { name: 'Kelp Sprouts (50 g)', price: 2.49 },
        { name: 'Shanghai Bok Choy (50 g)', price: 1.99 },
        { name: 'Fried Egg (1 PC)', price: 2.99 },
        { name: 'Wood Ear Mushroom (5 PC)', price: 2.49 },
        { name: 'Tamago (2 PC)', price: 2.49 },
        { name: 'Fresh Tofu Skin (50 g)', price: 1.99 },
        { name: 'Napa Cabbage (50 g)', price: 1.99 },
        { name: 'Dried Orchid (1 PC)', price: 1.99 },
        { name: 'Fresh Bean Curd (3 PC)', price: 2.49 },
        { name: 'Frozen Tofu (3 PC)', price: 2.49 },
        { name: 'Edamame (100 g)', price: 3.99 },
        { name: 'Fresh Tofu (50 g)', price: 1.99 },
        { name: 'Konjac Knot (5 PC)', price: 1.99 },
        { name: 'Cabbage (50 g)', price: 1.99 },
        { name: 'Bean Sprout (50 g)', price: 1.99 },
        { name: 'Chinese Doughnut (2 PC)', price: 2.49 },
        { name: 'Small Crab Stick (3 PC)', price: 2.49 }
      ]
    },
    noodles: {
      title: 'Noodles & Rice',
      subtitle: 'Noodles, rice and carb options',
      items: [
        { name: 'Rice', price: 2.50 },
        { name: 'Egg Noodle (1 PC)', price: 3.99 },
        { name: 'Purple Yam Noodle (1 PC)', price: 3.99 },
        { name: 'Instant Noodle (1 PC)', price: 3.99 },
        { name: 'Spinach Noodle (1 PC)', price: 3.99 },
        { name: 'Hand Crafted Noodle (1 PC)', price: 3.99 },
        { name: 'Mung Bean Noodle (9 PC)', price: 3.99 },
        { name: 'Vermicelli (1 PC)', price: 2.99 },
        { name: 'Udon (1 PC)', price: 3.99 },
        { name: 'Sliced Rice Cake (4 PC)', price: 1.99 },
        { name: 'Ramen (1 PC)', price: 4.99 },
        { name: 'Rice Vermicelli (100 g)', price: 3.99 },
        { name: 'Carb substitute - Napa Cabbage (100 g)', price: 3.99 }
      ]
    },
    sauces: {
      title: 'Sauces & Condiments',
      subtitle: 'Enhance your hot pot experience',
      items: [
        { name: 'Chili Oil', price: 2.50 },
        { name: 'Chili', price: 2.50 },
        { name: 'Black Vinegar', price: 2.50 },
        { name: 'Sesame Oil', price: 2.50 },
        { name: 'BBQ Sauce (Sacha Sauce)', price: 2.50 },
        { name: 'Sesame Peanut Paste', price: 2.50 },
        { name: 'Chili Garlic Sauce', price: 2.50 },
        { name: 'Siracha', price: 2.50 },
        { name: 'Cilantro', price: 2.50 },
        { name: 'Green Onion', price: 2.50 },
        { name: 'Garlic', price: 2.50 },
        { name: 'Oyster Sauce', price: 2.50 }
      ]
    },
    others: {
      title: 'Other Add-Ons',
      subtitle: 'Additional items and special add-ons',
      items: [
        { name: 'Butter', price: 1.99 },
        { name: 'Abalone (2 PC)', price: 7.98 },
        { name: 'Japanese Chicken Karaage', price: 5.99 },
        { name: 'Chicken Skewer', price: 3.99 },
        { name: 'Beef Skewer', price: 4.99 },
        { name: 'Shrimp Skewer', price: 4.99 },
        { name: 'Pork Belly Skewer', price: 4.99 },
        { name: 'Spiral Potato', price: 3.99 }
      ]
    }
  }

  const categories = Object.keys(menuData)

  const toppings = [
    'Black Pearls',
    'Popping Pearls', 
    'Coconut Jelly',
    'Mango Jelly',
    'Lychee Jelly'
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="menu-hero-modern">
        <div className="hero-bg-menu">
          <Image
            src="/assets/images/hero-background-77cf30.png"
            alt="Menu Hero Background"
            fill
            style={{ objectFit: 'cover' }}
          />
          <div className="hero-overlay-menu"></div>
        </div>
        <div className="container">
          <div className="menu-hero-content">
            <h1 className="menu-hero-title">
              Our <span className="title-red">Menu</span>
            </h1>
            <p className="menu-hero-description">
              Discover our authentic hot pot experience with premium ingredients, 
              signature broths, and fresh selections made daily.
            </p>
          </div>
        </div>
      </section>

      {/* Menu Navigation */}
      <section className="menu-navigation-section">
        <div className="container">
          <div className="menu-nav-wrapper">
            <div className="menu-categories-nav">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`menu-nav-item ${activeCategory === category ? 'active' : ''}`}
                >
                  {menuData[category].title}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Menu Content */}
      <section className="menu-content-section">
        <div className="container">
          <div className="menu-category-header">
            <h2 className="category-title">{menuData[activeCategory].title}</h2>
            <p className="category-subtitle">{menuData[activeCategory].subtitle}</p>
          </div>

          {/* Special Toppings Section for Drinks */}
          {activeCategory === 'drinks' && (
            <div className="toppings-section">
              <h3 className="toppings-title">Choose your Toppings <span className="toppings-price">+$0.70</span></h3>
              <div className="toppings-grid">
                {toppings.map((topping, index) => (
                  <div key={index} className="topping-item">
                    <span className="topping-dot">•</span>
                    <span className="topping-name">{topping}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Redesigned Broths Section */}
          {activeCategory === 'broths' ? (
            <div className="broths-redesigned-container">
              {/* Filter Tabs */}
              <div className="broth-filter-tabs">
                <button className="filter-tab active" data-filter="all">
                  <span className="tab-icon">🍲</span>
                  <span className="tab-text">All Broths</span>
                </button>
                <button className="filter-tab" data-filter="regular">
                  <span className="tab-icon">🔥</span>
                  <span className="tab-text">Signature</span>
                </button>
                <button className="filter-tab" data-filter="vegan">
                  <span className="tab-icon">🌱</span>
                  <span className="tab-text">Plant-Based</span>
                </button>
              </div>

              {/* Broths Grid */}
              <div className="broths-masonry-grid">
                {menuData[activeCategory].items.map((item, index) => (
                  <div key={index} className={`broth-card-redesigned ${item.vegan ? 'vegan-broth' : 'regular-broth'} ${item.spicy ? 'spicy-broth' : ''}`}>
                    {/* Card Header with Image */}
                    <div className="broth-card-header">
                      <div className="broth-image-wrapper">
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={400}
                          height={280}
                          className="broth-image-redesigned"
                        />
                        <div className="image-overlay">
                          <div className="broth-badges-redesigned">
                            {item.spicy && (
                              <div className="badge spicy-badge-new">
                                <span className="badge-icon">🌶️</span>
                                <span className="badge-text">Spicy</span>
                              </div>
                            )}
                            {item.vegan && (
                              <div className="badge vegan-badge-new">
                                <span className="badge-icon">🌱</span>
                                <span className="badge-text">Plant-Based</span>
                              </div>
                            )}
                          </div>
                          <div className="broth-number-redesigned">
                            {String(index + 1).padStart(2, '0')}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="broth-card-content">
                      <div className="broth-title-section">
                        <h3 className="broth-name-redesigned">{item.name}</h3>
                        <p className="broth-chinese-name-redesigned">{item.chineseName}</p>
                      </div>
                      
                      <div className="broth-description-section">
                        <p className="broth-description-redesigned">{item.description}</p>
                      </div>

                      <div className="broth-flavor-profile">
                        <div className="flavor-indicators">
                          {item.spicy && <div className="flavor-dot spicy-dot"></div>}
                          {item.name.toLowerCase().includes('chicken') && <div className="flavor-dot protein-dot"></div>}
                          {item.name.toLowerCase().includes('tomato') && <div className="flavor-dot fresh-dot"></div>}
                          {item.name.toLowerCase().includes('miso') && <div className="flavor-dot umami-dot"></div>}
                          {item.name.toLowerCase().includes('curry') && <div className="flavor-dot aromatic-dot"></div>}
                          {item.vegan && <div className="flavor-dot vegan-dot"></div>}
                        </div>
                        <div className="try-now-button">
                          <span>Try This Broth</span>
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Featured Broth Spotlight */}
              <div className="featured-broth-spotlight">
                <div className="spotlight-content">
                  <div className="spotlight-badge">
                    <span>🏆</span>
                    <span>Customer Favorite</span>
                  </div>
                  <h3>Signature Mala Tang Broth</h3>
                  <p>Our most beloved broth, crafted with authentic Sichuan spices and secret ingredients that have been passed down through generations.</p>
                  <button className="spotlight-cta">
                    <span>Learn More</span>
                    <div className="cta-arrow">→</div>
                  </button>
                </div>
                <div className="spotlight-image">
                  <Image
                    src="/assets/images/Signature Mala Tang Broth.png"
                    alt="Signature Mala Tang Broth"
                    width={300}
                    height={200}
                    className="spotlight-broth-image"
                  />
                </div>
              </div>
            </div>
          ) : (
            /* Regular Menu Items Grid */
            <div className="menu-items-grid">
              {menuData[activeCategory].items.map((item, index) => (
                <div key={index} className="menu-item-card">
                  <div className="menu-item-header">
                    <h3 className="menu-item-name">
                      {item.name}
                      {item.popular && <span className="popular-badge">Most Favorite</span>}
                      {item.spicy && <span className="spicy-badge">🌶️</span>}
                      {item.vegan && <span className="vegan-badge">🌱</span>}
                    </h3>
                    {item.price && <span className="menu-item-price">${item.price}</span>}
                  </div>
                  {item.description && (
                    <p className="menu-item-description">{item.description}</p>
                  )}
                  {item.category && (
                    <span className="menu-item-category">{item.category}</span>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
