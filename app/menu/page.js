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
      weighToPay: true,
      pricePerWeight: 3.69,
      weightUnit: '100g',
      items: [
        { name: 'Beef Ball', chineseName: '牛肉丸' },
        { name: 'Mushroom Pork Ball', chineseName: '香菇猪肉丸' },
        { name: 'Cuttlefish', chineseName: '墨鱼' },
        { name: 'Chicken Ball', chineseName: '鸡肉丸' },
        { name: 'Lobster Ball', chineseName: '龙虾丸' },
        { name: 'Imitation Snow Crab Leg', chineseName: '仿雪蟹腿' },
        { name: 'Crab', chineseName: '螃蟹' },
        { name: 'Scallop', chineseName: '扇贝' },
        { name: 'Mini Sausage', chineseName: '迷你香肠' },
        { name: 'Squid Ring', chineseName: '鱿鱼圈' },
        { name: 'Pork Ball', chineseName: '猪肉丸' },
        { name: 'Creamy Lobster Ball', chineseName: '奶油龙虾丸' },
        { name: 'Fuzhou Fish Ball', chineseName: '福州鱼丸' },
        { name: 'Squid Roll', chineseName: '鱿鱼卷' },
        { name: 'Octopus Fish Ball', chineseName: '章鱼鱼丸' },
        { name: 'Whole Shrimp Egg Dumpling', chineseName: '整虾蛋饺' },
        { name: 'Fish Tofu', chineseName: '鱼豆腐' },
        { name: 'Taro Fish Ball', chineseName: '芋头鱼丸' },
        { name: 'Grilled Fish Roll', chineseName: '烤鱼卷' },
        { name: 'Fish Ball with Cheese', chineseName: '芝士鱼丸' },
        { name: 'Mini Octopus', chineseName: '小章鱼' },
        { name: 'Salted Egg Lava Fish Ball', chineseName: '咸蛋黄流心鱼丸' },
        { name: 'Mochi', chineseName: '麻薯' },
        { name: 'Fortune Bag', chineseName: '福袋' },
        { name: 'Mussels', chineseName: '青口贝' },
        { name: 'White Fish Ball', chineseName: '白鱼丸' },
        { name: 'Snakehead Fish Slice', chineseName: '黑鱼片' },
        { name: 'Basa Fish Fillet', chineseName: '巴沙鱼片' },
        { name: 'Abalone', chineseName: '鲍鱼' }
      ]
    },
    meats: {
      title: 'Meats',
      subtitle: 'Premium cuts and specialty meat selections',
      weighToPay: true,
      pricePerWeight: 3.69,
      weightUnit: '100g',
      items: [
        { name: 'Deluxe Lamb Roll', chineseName: '精品羊肉卷' },
        { name: 'Beef Tripe', chineseName: '牛肚' },
        { name: 'Garlic Sausage', chineseName: '蒜味香肠' },
        { name: 'House Special Chicken', chineseName: '招牌鸡肉' },
        { name: 'Premium Pork Shoulder', chineseName: '精品猪肩肉' },
        { name: 'Beef Artery', chineseName: '牛动脉' },
        { name: 'Mini Smoky Sausage', chineseName: '迷你烟熏香肠' },
        { name: 'Black Pepper Duck Breast', chineseName: '黑胡椒鸭胸' },
        { name: 'Luncheon Pork', chineseName: '午餐肉' },
        { name: 'Premium Pork Belly', chineseName: '精品五花肉' },
        { name: 'Quail Egg', chineseName: '鹌鹑蛋' },
        { name: 'Deluxe Beef Roll', chineseName: '精品牛肉卷' },
        { name: 'Peeled Shrimp', chineseName: '去壳虾' }
      ]
    },
    vegetables: {
      title: 'Vegetables',
      subtitle: 'Fresh vegetables and plant-based options',
      weighToPay: true,
      pricePerWeight: 3.69,
      weightUnit: '100g',
      items: [
        { name: 'Crown Daisy', chineseName: '茼蒿' },
        { name: 'Mushroom', chineseName: '蘑菇' },
        { name: 'Broccoli', chineseName: '西兰花' },
        { name: 'Lotus Root', chineseName: '莲藕' },
        { name: 'Spinach', chineseName: '菠菜' },
        { name: 'Oyster Mushroom', chineseName: '平菇' },
        { name: 'Cauliflower', chineseName: '花椰菜' },
        { name: 'Potato', chineseName: '土豆' },
        { name: 'Seafood Mushroom', chineseName: '海鲜菇' },
        { name: 'Winter Melon', chineseName: '冬瓜' },
        { name: 'Konjac Vegan Tripe', chineseName: '魔芋素肚' },
        { name: 'Lettuce', chineseName: '生菜' },
        { name: 'Enoki Mushroom', chineseName: '金针菇' },
        { name: 'Baby Corn', chineseName: '玉米笋' },
        { name: 'Kelp Sprouts', chineseName: '海带芽' },
        { name: 'Shanghai Bok Choy', chineseName: '上海青' },
        { name: 'Fried Egg', chineseName: '煎蛋' },
        { name: 'Wood Ear Mushroom', chineseName: '木耳' },
        { name: 'Tamago', chineseName: '日式蛋' },
        { name: 'Fresh Tofu Skin', chineseName: '鲜腐皮' },
        { name: 'Napa Cabbage', chineseName: '大白菜' },
        { name: 'Dried Orchid', chineseName: '干兰花' },
        { name: 'Fresh Bean Curd', chineseName: '鲜豆腐' },
        { name: 'Frozen Tofu', chineseName: '冻豆腐' },
        { name: 'Edamame', chineseName: '毛豆' },
        { name: 'Fresh Tofu', chineseName: '嫩豆腐' },
        { name: 'Konjac Knot', chineseName: '魔芋结' },
        { name: 'Cabbage', chineseName: '卷心菜' },
        { name: 'Bean Sprout', chineseName: '豆芽' },
        { name: 'Chinese Doughnut', chineseName: '油条' },
        { name: 'Small Crab Stick', chineseName: '小蟹棒' }
      ]
    },
    noodles: {
      title: 'Noodles & Rice',
      subtitle: 'Noodles, rice and carb options',
      weighToPay: true,
      pricePerWeight: 3.69,
      weightUnit: '100g',
      items: [
        { name: 'Rice', chineseName: '米饭' },
        { name: 'Egg Noodle', chineseName: '鸡蛋面' },
        { name: 'Purple Yam Noodle', chineseName: '紫薯面' },
        { name: 'Instant Noodle', chineseName: '方便面' },
        { name: 'Spinach Noodle', chineseName: '菠菜面' },
        { name: 'Hand Crafted Noodle', chineseName: '手工面' },
        { name: 'Mung Bean Noodle', chineseName: '绿豆粉丝' },
        { name: 'Vermicelli', chineseName: '粉丝' },
        { name: 'Udon', chineseName: '乌冬面' },
        { name: 'Sliced Rice Cake', chineseName: '年糕片' },
        { name: 'Ramen', chineseName: '拉面' },
        { name: 'Rice Vermicelli', chineseName: '米粉' },
        { name: 'Carb Substitute - Napa Cabbage', chineseName: '低卡替代-大白菜' }
      ]
    },
    sauces: {
      title: 'Sauces & Condiments',
      subtitle: 'Enhance your hot pot experience',
      weighToPay: true,
      pricePerWeight: 3.69,
      weightUnit: '100g',
      items: [
        { name: 'Chili Oil', chineseName: '辣椒油' },
        { name: 'Chili', chineseName: '辣椒' },
        { name: 'Black Vinegar', chineseName: '黑醋' },
        { name: 'Sesame Oil', chineseName: '香油' },
        { name: 'BBQ Sauce (Sacha Sauce)', chineseName: '沙茶酱' },
        { name: 'Sesame Peanut Paste', chineseName: '芝麻花生酱' },
        { name: 'Chili Garlic Sauce', chineseName: '蒜蓉辣椒酱' },
        { name: 'Sriracha', chineseName: '是拉差酱' },
        { name: 'Cilantro', chineseName: '香菜' },
        { name: 'Green Onion', chineseName: '葱花' },
        { name: 'Garlic', chineseName: '蒜' },
        { name: 'Oyster Sauce', chineseName: '蚝油' }
      ]
    },
    others: {
      title: 'Other Add-Ons',
      subtitle: 'Additional items and special add-ons',
      weighToPay: true,
      pricePerWeight: 3.69,
      weightUnit: '100g',
      items: [
        { name: 'Butter', chineseName: '黄油' },
        { name: 'Premium Abalone', chineseName: '精品鲍鱼' },
        { name: 'Japanese Chicken Karaage', chineseName: '日式炸鸡' },
        { name: 'Chicken Skewer', chineseName: '鸡肉串' },
        { name: 'Beef Skewer', chineseName: '牛肉串' },
        { name: 'Shrimp Skewer', chineseName: '虾串' },
        { name: 'Pork Belly Skewer', chineseName: '五花肉串' },
        { name: 'Spiral Potato', chineseName: '螺旋土豆' }
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
              {/* Broths Grid */}
              <div className="broths-clean-grid">
                {menuData[activeCategory].items.map((item, index) => (
                  <div key={index} className="broth-card-clean">
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
                    </div>
                  </div>
                ))}
              </div>

              {/* Featured Broth Spotlight */}
              <div className="featured-broth-spotlight">
                <div className="spotlight-content">
                  <div className="spotlight-badge">
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
            <div className="menu-section">
              {/* Pricing Header for Weigh-to-Pay Sections */}
              {menuData[activeCategory].weighToPay && (
                <div className="weigh-to-pay-header">
                  <div className="pricing-badge">
                    <span className="price-amount">${menuData[activeCategory].pricePerWeight}</span>
                    <span className="price-unit">per {menuData[activeCategory].weightUnit}</span>
                  </div>
                  <p className="pricing-description">
                    All items in this section are priced by weight. Simply select what you want and we'll weigh it for you!
                  </p>
                </div>
              )}
              
              {/* Items Grid */}
              <div className="ingredients-grid">
                {menuData[activeCategory].items.map((item, index) => (
                  <div key={index} className={`ingredient-card ${menuData[activeCategory].weighToPay ? 'weigh-to-pay' : 'regular-item'}`}>
                    <div className="ingredient-content">
                      <h3 className="ingredient-name-english">{item.name}</h3>
                      {item.chineseName && (
                        <p className="ingredient-name-chinese">{item.chineseName}</p>
                      )}
                      
                      {/* Regular pricing for drinks */}
                      {!menuData[activeCategory].weighToPay && (
                        <div className="ingredient-details">
                          {item.popular && <span className="popular-badge">Most Favorite</span>}
                          {item.spicy && <span className="spicy-badge">🌶️</span>}
                          {item.vegan && <span className="vegan-badge">🌱</span>}
                          {item.price && <span className="ingredient-price">${item.price}</span>}
                          {item.description && <p className="ingredient-description">{item.description}</p>}
                          {item.category && <span className="ingredient-category">{item.category}</span>}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
