import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, ShoppingCart } from "lucide-react"

export default function ProductListPage() {
  const product = {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 299.99,
    originalPrice: 399.99,
    image: "/placeholder.svg?height=300&width=300",
    description: "High-quality wireless headphones with noise cancellation and premium sound quality.",
    rating: 4.5,
    reviews: 128,
    inStock: true,
    category: "Electronics",
  }

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
          <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="relative">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                width={300}
                height={300}
                className="w-full h-64 object-cover"
              />
              {product.originalPrice > product.price && (
                <Badge className="absolute top-2 left-2 bg-red-500 hover:bg-red-600">Sale</Badge>
              )}
              {product.inStock && (
                <Badge variant="secondary" className="absolute top-2 right-2 bg-green-100 text-green-800">
                  In Stock
                </Badge>
              )}
            </div>

            <CardContent className="p-4">
              <div className="mb-2">
                <Badge variant="outline" className="text-xs">
                  {product.category}
                </Badge>
              </div>

              <h3 className="font-semibold text-lg mb-2 line-clamp-2">{product.name}</h3>

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
                {product.originalPrice > product.price && (
                  <span className="text-lg text-gray-500 line-through">${product.originalPrice}</span>
                )}
              </div>
            </CardContent>

            <CardFooter className="p-4 pt-0">
              <Button className="w-full" disabled={!product.inStock}>
                <ShoppingCart className="w-4 h-4 mr-2" />
                {product.inStock ? "Add to Cart" : "Out of Stock"}
              </Button>
            </CardFooter>
          </Card>
        </div>

        {/* Empty State Message */}
        <div className="text-center mt-12">
          <p className="text-gray-500">More products coming soon! Stay tuned for our latest additions.</p>
        </div>
      </div>
    </div>
  )
}
