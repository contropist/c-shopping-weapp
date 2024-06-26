import React from 'react'
import { Image, Text, View, ScrollView } from '@tarojs/components'

import FeedSectionContainer from './common/FeedSectionContainer'
import { Link } from '.'

export default function Categories(props) {
  //? Props
  const { childCategories, color, name } = props

  //? Re-Renders
  if (childCategories.categories.length > 0 && color && name) {
    return (
      <FeedSectionContainer title="分类">
        <ScrollView scrollX>
          <View className="flex flex-row flex-nowrap w-auto">
            {childCategories.categories.map((item, index) => (
              <Link
                key={item._id}
                href={`/pages/products/index?category=${item.slug}`}
                className="flex flex-col items-center mr-3 space-y-2"
                asChild
              >
                <View className="w-14 h-14 rounded-full border-solid border-2 border-slate-200 overflow-hidden">
                  <Image key={index} src={item.image} className="w-full h-full" />
                </View>
                <Text className="text-gray-700 whitespace-nowrap">{item.name}</Text>
              </Link>
            ))}
          </View>
        </ScrollView>
      </FeedSectionContainer>
    )
  }
  return null
}
