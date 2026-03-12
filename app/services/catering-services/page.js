// app/customize-menu/page.js
"use client"
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionTitle from '@/components/SectionTitle'

export default function CustomizeMenuPage() {
  const [selectedItems, setSelectedItems] = useState({})
  const [activeCategory, setActiveCategory] = useState('refreshments')
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    phone: '',
    eventDate: '',
    guestCount: '',
    specialRequests: ''
  })

  // Menu categories data based on the image
  const menuCategories = {
    refreshments: {
      title: "Rainbow Refresher",
      icon: "🥤",
      items: [
        { id: 'blue-lagoon', name: 'Blue Lagoon',   },
        { id: 'virgin-mojito', name: 'Virgin Mojito',   },
        { id: 'pink-lady', name: 'Pink Lady',   },
        { id: 'soda-shikanji', name: 'Soda Shikanji',   },
        { id: 'aam-pora', name: 'Aam Pora Sharbat',   },
        { id: 'aam-panna', name: 'Aam Panna',   }
      ]
    },
    indianTeapot: {
      title: "Indian Teapot",
      icon: "☕",
      items: [
        { id: 'hot-bowl', name: 'The Hot Bowl',   },
        { id: 'masala-chai', name: 'Masala Chai',   },
        { id: 'kadak-chai', name: 'Kadak Chai',   },
        { id: 'tulsi-tea', name: 'Tulsi Tea',   },
        { id: 'lemon-tea', name: 'Lemon Tea',   }
      ]
    },
    dumplings: {
      title: "Dumplings Mania",
      icon: "🥟",
      items: [
        { id: 'veg-dumplings', name: 'Veg Dumplings',   },
        { id: 'chicken-dumplings', name: 'Chicken Dumplings',   },
        { id: 'prawn-dumplings', name: 'Prawn Dumplings',   },
        { id: 'schezwan-dumplings', name: 'Schezwan Dumplings',   },
        { id: 'pan-fried-dumplings', name: 'Pan Fried Dumplings',   }
      ]
    },
    snacksVeg: {
      title: "Snacks Square (Veg)",
      icon: "🍱",
      items: [
        { id: 'lenti-dish', name: 'Lenti Dish',   },
        { id: 'veg-pakora', name: 'Veg Pakora',   },
        { id: 'paneer-tikka', name: 'Paneer Tikka',   },
        { id: 'spring-roll', name: 'Spring Roll',   },
        { id: 'samosa', name: 'Samosa',   }
      ]
    },
    snacksNonVeg: {
      title: "Snacks Square (Non Veg)",
      icon: "🍗",
      items: [
        { id: 'chicken-tikka', name: 'Chicken Tikka',   },
        { id: 'fish-fingers', name: 'Fish Fingers',   },
        { id: 'chicken-65', name: 'Chicken 65',   },
        { id: 'egg-roll', name: 'Egg Roll',   }
      ]
    },
    shakes: {
      title: "Shakes",
      icon: "🥛",
      items: [
        { id: 'chocolate-shake', name: 'Chocolate Shake',   },
        { id: 'strawberry-shake', name: 'Strawberry Shake',   },
        { id: 'mango-shake', name: 'Mango Shake',   },
        { id: 'oreo-shake', name: 'Oreo Shake',   },
        { id: 'butterscotch', name: 'Butterscotch',   }
      ]
    },
    beverages: {
      title: "Carbonated Fizzy Bottles",
      icon: "🧃",
      items: [
        { id: 'coke', name: 'Coca Cola',   },
        { id: 'pepsi', name: 'Pepsi',   },
        { id: 'sprite', name: 'Sprite',   },
        { id: 'fanta', name: 'Fanta',   },
        { id: 'limca', name: 'Limca',   }
      ]
    },
    coffee: {
      title: "Coffee",
      icon: "☕",
      items: [
        { id: 'filter-coffee', name: 'Filter Coffee',   },
        { id: 'cappuccino', name: 'Cappuccino',   },
        { id: 'latte', name: 'Latte',   },
        { id: 'espresso', name: 'Espresso',   },
        { id: 'cold-coffee', name: 'Cold Coffee',   }
      ]
    },
    indianFood: {
      title: "Indian Food Path",
      icon: "🍛",
      items: [
        { id: 'veg-biryani', name: 'Veg Biryani',   },
        { id: 'chicken-biryani', name: 'Chicken Biryani',   },
        { id: 'paneer-butter-masala', name: 'Paneer Butter Masala',   },
        { id: 'dal-makhani', name: 'Dal Makhani',   },
        { id: 'butter-chicken', name: 'Butter Chicken',   }
      ]
    },
    salads: {
      title: "Salad Island",
      icon: "🥗",
      items: [
        { id: 'greek-salad', name: 'Greek Salad',   },
        { id: 'caesar-salad', name: 'Caesar Salad',   },
        { id: 'fruit-salad', name: 'Fresh Fruit Salad',   },
        { id: 'pasta-salad', name: 'Pasta Salad',   }
      ]
    },
    vegan: {
      title: "Vegan Paradise",
      icon: "🌱",
      items: [
        { id: 'vegan-burger', name: 'Vegan Burger',   },
        { id: 'tofu-tikka', name: 'Tofu Tikka',   },
        { id: 'vegan-bowl', name: 'Vegan Power Bowl',   },
        { id: 'quinoa-salad', name: 'Quinoa Salad',   }
      ]
    }
  }

  const handleItemSelect = (categoryId, itemId) => {
    setSelectedItems(prev => {
      const key = `${categoryId}-${itemId}`
      const newSelected = { ...prev }
      if (newSelected[key]) {
        delete newSelected[key]
      } else {
        newSelected[key] = {
          category: categoryId,
          itemId,
          ...menuCategories[categoryId].items.find(i => i.id === itemId)
        }
      }
      return newSelected
    })
  }

  const getTotalItems = () => {
    return Object.keys(selectedItems).length
  }

  const getTotalPrice = () => {
    return Object.values(selectedItems).reduce((sum, item) => sum + item.price, 0)
  }

  const generateWhatsAppMessage = () => {
    const itemsList = Object.values(selectedItems)
      .map(item => `• ${item.name} - ₹${item.price}`)
      .join('\n')
    
    const message = `🍽️ *Wedding Menu Enquiry*

*Customer Details:*
👤 Name: ${customerInfo.name || 'Not provided'}
📞 Phone: ${customerInfo.phone || 'Not provided'}
📅 Event Date: ${customerInfo.eventDate || 'Not provided'}
👥 Guest Count: ${customerInfo.guestCount || 'Not provided'}

*Selected Menu Items:*
${itemsList || 'No items selected'}

// 💰 *Total Estimated Cost: ₹${getTotalPrice()}*

📝 Special Requests:
${customerInfo.specialRequests || 'None'}

_This is an enquiry from the website._`

    return encodeURIComponent(message)
  }

  const sendToWhatsApp = () => {
    if (getTotalItems() === 0) {
      alert('Please select at least one menu item')
      return
    }
    
    const phoneNumber = '9830204459'
    const message = generateWhatsAppMessage()
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank')
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-amber-50 via-white to-orange-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23b91c1c' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-2 bg-burgundy-100 text-burgundy-700 rounded-full text-sm font-semibold mb-4">
              🍽️ Customize Your Wedding Menu
            </span>
            <h1 className="text-5xl md:text-6xl font-cinzel font-bold text-gray-900 mb-6">
              Create Your Perfect <span className="text-burgundy-700">Wedding Feast</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Mix and match from our exquisite selection of dishes. Each item is crafted with love 
              and the finest ingredients to make your special day unforgettable.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Categories Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
                <h3 className="text-xl font-cinzel font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <span className="w-1 h-8 bg-burgundy-600 rounded-full"></span>
                  Menu Categories
                </h3>
                <div className="space-y-2 max-h-[600px] overflow-y-auto pr-2">
                  {Object.entries(menuCategories).map(([key, category]) => (
                    <button
                      key={key}
                      onClick={() => setActiveCategory(key)}
                      className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 flex items-center gap-3 ${
                        activeCategory === key
                          ? 'bg-burgundy-600 text-white shadow-lg'
                          : 'bg-gray-50 text-gray-700 hover:bg-burgundy-50'
                      }`}
                    >
                      <span className="text-xl">{category.icon}</span>
                      <span className="font-medium">{category.title}</span>
                    </button>
                  ))}
                </div>

                {/* Selected Items Summary */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-4 flex justify-between">
                    <span>Selected Items</span>
                    <span className="text-burgundy-600">{getTotalItems()}</span>
                  </h4>
                  <div className="max-h-48 overflow-y-auto mb-4 space-y-2">
                    {Object.values(selectedItems).map((item, index) => (
                      <div key={index} className="text-sm flex justify-between items-center bg-gray-50 p-2 rounded">
                        <span className="text-gray-700">{item.name}</span>
                      </div>
                    ))}
                  </div>
                  {/* <div className="flex justify-between font-bold text-lg mb-4">
                    <span>Total:</span>
                    <span className="text-burgundy-700">₹{getTotalPrice()}</span>
                  </div> */}
                  <button
                    onClick={sendToWhatsApp}
                    className="w-full py-3 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                  >
                    <span>💬</span>
                    Send to WhatsApp
                  </button>
                </div>
              </div>
            </div>

            {/* Menu Items Grid */}
            <div className="lg:col-span-3">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl shadow-lg p-6"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-burgundy-100 rounded-xl flex items-center justify-center text-2xl">
                      {menuCategories[activeCategory].icon}
                    </div>
                    <h2 className="text-2xl font-cinzel font-bold text-gray-900">
                      {menuCategories[activeCategory].title}
                    </h2>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    {menuCategories[activeCategory].items.map((item) => {
                      const isSelected = selectedItems[`${activeCategory}-${item.id}`]
                      return (
                        <motion.div
                          key={item.id}
                          whileHover={{ scale: 1.02 }}
                          className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                            isSelected
                              ? 'border-burgundy-600 bg-burgundy-50 shadow-md'
                              : 'border-gray-200 hover:border-burgundy-300 hover:shadow-md'
                          }`}
                          onClick={() => handleItemSelect(activeCategory, item.id)}
                        >
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-semibold text-gray-900">{item.name}</h3>
                              {/* <p className="text-burgundy-600 font-bold mt-2">{item.price}</p> */}
                            </div>
                            <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                              isSelected
                                ? 'border-burgundy-600 bg-burgundy-600'
                                : 'border-gray-300'
                            }`}>
                              {isSelected && (
                                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                              )}
                            </div>
                          </div>
                        </motion.div>
                      )
                    })}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Customer Information Form */}
              <div className="mt-8 bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-cinzel font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <span className="w-1 h-8 bg-burgundy-600 rounded-full"></span>
                  Your Details
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name *"
                    value={customerInfo.name}
                    onChange={(e) => setCustomerInfo({...customerInfo, name: e.target.value})}
                    className="px-4 py-3 border text-black border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-burgundy-500"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number *"
                    value={customerInfo.phone}
                    onChange={(e) => setCustomerInfo({...customerInfo, phone: e.target.value})}
                    className="px-4 py-3 border text-black border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-burgundy-500"
                  />
                  <input
                    type="date"
                    placeholder="Event Date"
                    value={customerInfo.eventDate}
                    onChange={(e) => setCustomerInfo({...customerInfo, eventDate: e.target.value})}
                    className="px-4 py-3 border text-black border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-burgundy-500"
                  />
                  <input
                    type="number"
                    placeholder="Number of Guests"
                    value={customerInfo.guestCount}
                    onChange={(e) => setCustomerInfo({...customerInfo, guestCount: e.target.value})}
                    className="px-4 py-3 border text-black border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-burgundy-500"
                  />
                  <textarea
                    placeholder="Special Requests or Dietary Requirements"
                    value={customerInfo.specialRequests}
                    onChange={(e) => setCustomerInfo({...customerInfo, specialRequests: e.target.value})}
                    rows="3"
                    className="md:col-span-2 px-4 py-3 border text-black border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-burgundy-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-gradient-to-br from-burgundy-50 to-amber-50">
        <div className="container-custom">
          <SectionTitle
            title="Why Choose Our Wedding Menu"
            subtitle="We understand that every wedding is unique, and so should be the menu"
            centered
          />
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              {
                icon: "👨‍🍳",
                title: "Expert Chefs",
                description: "Our team of experienced chefs ensures each dish is prepared to perfection"
              },
              {
                icon: "🥘",
                title: "Customizable Options",
                description: "Adjust spices, portions, and dietary preferences to suit your guests"
              },
              {
                icon: "✨",
                title: "Premium Ingredients",
                description: "We use only the finest and freshest ingredients in all our dishes"
              },
              {
                icon: "📋",
                title: "Tasting Session",
                description: "Schedule a tasting session before finalizing your menu"
              },
              {
                icon: "👥",
                title: "Guest Preferences",
                description: "We accommodate vegetarian, vegan, and gluten-free requirements"
              },
              {
                icon: "🎊",
                title: "Elegant Presentation",
                description: "Beautifully presented dishes that enhance your wedding aesthetic"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-3xl mb-3">{feature.icon}</div>
                <h3 className="text-lg font-cinzel font-semibold text-burgundy-0 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-burgundy-900 to-burgundy-700 text-white">
        <div className="container-custom text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-cinzel font-bold mb-6"
          >
            Need Help Creating Your Perfect Menu?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto"
          >
            Our culinary experts are here to guide you in creating a memorable dining experience 
            for your special day.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a
              href="tel:9830204459"
              className="inline-block px-8 py-4 bg-white text-burgundy-700 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              📞 Call Us: 9830204459
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}