"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowLeft, ShoppingCart, Star, Flame, Zap, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useRouter } from "next/navigation"

interface ProductPageProps {
  params: {
    id: string
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const router = useRouter()
  const [selectedColor, setSelectedColor] = useState("black")
  const [selectedSize, setSelectedSize] = useState("M")

  // Mock product data - in a real app, you'd fetch this based on params.id
  const product = {
    id: params.id,
    name: "Comfort Hoodie H1212",
    rating: 4.5,
    reviews: 66,
    price: 44.5,
    originalPrice: 45.0,
    description:
      "Show your fraternity pride in style with the Comfort Hoodie. Featuring a bold Alpha Tau Omega cookout graphic on ultra-soft fabric, this hoodie delivers warmth, personality, and all-day comfort — perfect for laid-back events or everyday wear.",
    images: [
      "/images/hoodie-hero.png",
      "/placeholder.svg?height=200&width=200",
      "/placeholder.svg?height=200&width=200",
      "/placeholder.svg?height=200&width=200",
    ],
    colors: [
      { name: "Dark Black", value: "black", color: "#000000" },
      { name: "Navy Blue", value: "navy", color: "#1e3a8a" },
      { name: "Royal Blue", value: "blue", color: "#3b82f6" },
      { name: "Light Gray", value: "gray", color: "#9ca3af" },
    ],
    sizes: ["2XS", "XS", "M", "L", "2XL", "3XL", "4XL", "5XL"],
    material: {
      cotton: 50,
      polyester: 50,
    },
  }

  const pricingTiers = [
    { quantity: "0", price: "$45.00", color: "bg-gray-200" },
    { quantity: "24", price: "$44.50", color: "bg-green-500" },
    { quantity: "36", price: "$42.37", color: "bg-green-500" },
    { quantity: "48", price: "$40.16", color: "bg-gray-200" },
    { quantity: "72", price: "$39.07", color: "bg-gray-200" },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-4 py-3 text-center text-sm">
        <div className="flex items-center justify-center gap-2">
          <span>🤩</span>
          <span>
            Store closes in <strong>04d 09h 23m 56s</strong>
          </span>
        </div>
      </div>

      {/* Navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between mb-6">
          <button onClick={() => router.back()} className="flex items-center gap-2 text-gray-600 hover:text-gray-800">
            <ArrowLeft className="w-4 h-4" />
            Back to Products
          </button>
          <ShoppingCart className="w-6 h-6 text-purple-600" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <Badge className="bg-orange-100 text-orange-600 border-orange-200 mb-4">
              <Flame className="w-3 h-3 mr-1" />
              Trending
            </Badge>

            <div className="grid gap-4">
              <div className="aspect-square rounded-lg overflow-hidden bg-gray-50">
                <Image
                  src={product.images[0] || "/placeholder.svg"}
                  alt={product.name}
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="grid grid-cols-3 gap-4">
                {product.images.slice(1).map((image, index) => (
                  <div key={index} className="aspect-square rounded-lg overflow-hidden bg-gray-50">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${product.name} view ${index + 2}`}
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="ml-1 font-semibold">{product.rating}</span>
                </div>
                <button className="text-blue-600 hover:underline">{product.reviews} Reviews ∨</button>
              </div>

              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl font-bold text-gray-900">${product.price}</span>
                <span className="text-lg text-gray-500 line-through">${product.originalPrice}</span>
              </div>
            </div>

            {/* Pricing Tiers */}
            <div className="space-y-3">
              <div className="grid grid-cols-5 gap-2 text-sm">
                {pricingTiers.map((tier, index) => (
                  <div key={index} className="text-center">
                    <div className="text-gray-600 mb-1">{tier.quantity}</div>
                    <div className="font-semibold">{tier.price}</div>
                    <div className={`h-1 rounded-full mt-1 ${tier.color}`}></div>
                  </div>
                ))}
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-lg p-3">
                <div className="flex items-center gap-2 text-sm">
                  <Flame className="w-4 h-4 text-orange-500" />
                  <span>
                    <strong>28 people already ordered!</strong> Get it for <strong>$39.07</strong> when we reach 72
                    orders —<button className="text-blue-600 hover:underline ml-1">Share Now</button>
                  </span>
                </div>
              </div>
            </div>

            {/* Color Selection */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="font-medium">Color</span>
                <span className="text-gray-600">Dark Black</span>
              </div>
              <div className="flex gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color.value}
                    onClick={() => setSelectedColor(color.value)}
                    className={`w-8 h-8 rounded-full border-2 ${
                      selectedColor === color.value ? "border-gray-800" : "border-gray-300"
                    }`}
                    style={{ backgroundColor: color.color }}
                    aria-label={color.name}
                  />
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="font-medium">Size</span>
                <span className="text-gray-600">M-2, L-1, 4XL-1</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 border rounded-md text-sm font-medium ${
                      selectedSize === size ? "border-gray-800 bg-gray-100" : "border-gray-300 hover:border-gray-400"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg font-semibold">
                <Zap className="w-5 h-5 mr-2" />
                Buy Now
              </Button>

              <Button
                variant="outline"
                className="w-full border-green-600 text-green-600 hover:bg-green-50 py-3 bg-transparent"
              >
                <ShoppingBag className="w-5 h-5 mr-2" />
                Add To Cart
              </Button>

              <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 py-3 font-semibold">
                🔒 Check Out With PayPal
              </Button>
            </div>

            {/* Material Info */}
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-pink-300"></div>
                <span>{product.material.cotton}% Cotton</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-300"></div>
                <span>{product.material.polyester}% Polyester</span>
              </div>
            </div>

            {/* Product Description */}
            <div className="text-gray-600 leading-relaxed">
              <p>{product.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
