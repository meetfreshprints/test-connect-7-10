"use client"

import { useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, ShoppingCart } from "lucide-react"

export default function ProductListPage() {
  const router = useRouter()

  const handleProductClick = (productId: number) => {
    router.push(`/product/${productId}`)
  }

  const products = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: 299.99,
      originalPrice: 399.99,
      image: "/placeholder.svg?height=300&width=300&text=Wireless+Headphones",
      description: "High-quality wireless headphones with noise cancellation and premium sound quality.",
      rating: 4.5,
      reviews: 128,
      inStock: true,
      category: "Electronics",
      isOnSale: true,
    },
    {
      id: 2,
      name: "Smart Fitness Watch",
      price: 199.99,
      originalPrice: 249.99,
      image: "/placeholder.svg?height=300&width=300&text=Fitness+Watch",
      description: "Advanced fitness tracking with heart rate monitoring and GPS functionality.",
      rating: 4.3,
      reviews: 89,
      inStock: true,
      category: "Wearables",
      isOnSale: true,
    },
    {
      id: 3,
      name: "Professional Camera Lens",
      price: 599.99,
      originalPrice: 599.99,
      image: "/placeholder.svg?height=300&width=300&text=Camera+Lens",
      description: "Professional grade 50mm lens with exceptional clarity and bokeh effect.",
      rating: 4.8,
      reviews: 156,
      inStock: false,
      category: "Photography",
      isOnSale: false,
    },
    {
      id: 4,
      name: "Ergonomic Office Chair",
      price: 449.99,
      originalPrice: 549.99,
      image: "/placeholder.svg?height=300&width=300&text=Office+Chair",
      description: "Comfortable ergonomic chair with lumbar support and adjustable height.",
      rating: 4.6,
      reviews: 203,
      inStock: true,
      category: "Furniture",
      isOnSale: true,
    },
    {
      id: 5,
      name: "Mechanical Gaming Keyboard",
      price: 159.99,
      originalPrice: 189.99,
      image: "/placeholder.svg?height=300&width=300&text=Gaming+Keyboard",
      description: "RGB backlit mechanical keyboard with tactile switches for gaming.",
      rating: 4.4,
      reviews: 94,
      inStock: true,
      category: "Gaming",
      isOnSale: true,
    },
    {
      id: 6,
      name: "Portable Bluetooth Speaker",
      price: 79.99,
      originalPrice: 99.99,
      image: "/placeholder.svg?height=300&width=300&text=Bluetooth+Speaker",
      description: "Waterproof portable speaker with 12-hour battery life and rich sound.",
      rating: 4.2,
      reviews: 67,
      inStock: true,
      category: "Audio",
      isOnSale: true,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Our Products</h1>
          <p className="text-gray-600">Discover our carefully curated selection of premium items</p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card
              key={product.id}
              className="overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
              onClick={() => handleProductClick(product.id)}
            >
              <div className="relative">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                {product.isOnSale && <Badge className="absolute top-2 left-2 bg-red-500 hover:bg-red-600">Sale</Badge>}
                {product.inStock ? (
                  <Badge variant="secondary" className="absolute top-2 right-2 bg-green-100 text-green-800">
                    In Stock
                  </Badge>
                ) : (
                  <Badge variant="secondary" className="absolute top-2 right-2 bg-red-100 text-red-800">
                    Out of Stock
                  </Badge>
                )}
              </div>

              <CardContent className="p-4">
                <div className="mb-2">
                  <Badge variant="outline" className="text-xs">
                    {product.category}
                  </Badge>
                </div>

                <h3 className="font-semibold text-lg mb-2 line-clamp-2 hover:text-blue-600 transition-colors">
                  {product.name}
                </h3>

                <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>

                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 ml-2">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl font-bold text-gray-900">${product.price}</span>
                  {product.isOnSale && product.originalPrice > product.price && (
                    <span className="text-lg text-gray-500 line-through">${product.originalPrice}</span>
                  )}
                  {product.isOnSale && (
                    <Badge variant="destructive" className="text-xs">
                      {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                    </Badge>
                  )}
                </div>
              </CardContent>

              <CardFooter className="p-4 pt-0">
                <Button
                  className="w-full"
                  disabled={!product.inStock}
                  variant={product.inStock ? "default" : "secondary"}
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  {product.inStock ? "Add to Cart" : "Out of Stock"}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Load More Section */}
        <div className="text-center mt-12">
          <Button variant="outline" className="px-8 py-2 bg-transparent">
            Load More Products
          </Button>
          <p className="text-gray-500 mt-4">Showing {products.length} of 24 products</p>
        </div>
      </div>
    </div>
  )
}
