import { Text, View } from '@tarojs/components'

import EmptyCustomList from '../emptyList/EmptyCustomList'
import PageLoading from '../loading/PageLoading'

export default function ShowWrapper(props) {
  //? Porps
  const {
    isError,
    error,
    refetch,
    isFetching,
    dataLength,
    type = 'list',
    originalArgs = null,
    isSuccess,
    emptyComponent,
    loadingComponent,
    children,
  } = props

  //? Render(s)
  return (
    <>
      {isError ? (
        <View className="py-36 mx-auto flex flex-col gap-y-4 text-center w-fit">
          <Text className="text-sm">出现异常</Text>
          <Text className="text-sm text-red-500">{error?.error}</Text>
          <View className="mx-auto py-2 px-8 flex-center bg-red-500 rounded-full" onClick={refetch}>
            <Text className="text-sm text-white">重试</Text>
          </View>
        </View>
      ) : isFetching ? (
        type === 'list' && originalArgs && originalArgs?.page > 1 ? (
          <>{children}</>
        ) : (
          <View className="">{loadingComponent || <PageLoading />}</View>
        )
      ) : isSuccess && type === 'list' && dataLength > 0 ? (
        <>{children}</>
      ) : isSuccess && type === 'list' && dataLength === 0 ? (
        <>{emptyComponent || <EmptyCustomList />}</>
      ) : isSuccess && type === 'detail' ? (
        <>{children}</>
      ) : null}
    </>
  )
}
