// ~/composables/useActiveClass.ts
import type { RouteLocationRaw } from 'vue-router'

export function useActiveClass(
    active = 'text-black font-medium',
    inactive = 'text-black/60'
) {
    // useRoute() được Nuxt auto-import; lúc SSR + CSR đều có
    const route = useRoute()
    const router = useRouter()

    const isActive = (to: RouteLocationRaw) => {
        if (!route.name) {
            // Nếu route hiện tại chưa sẵn sàng (ví dụ: đang loading)
            return false
        }

        // 1. Dùng router.resolve để biến 'to' (string/object) thành đối tượng route đầy đủ
        //    Điều này ngăn chặn lỗi prop type trong template.
        const resolved = router.resolve(to)

        // 2. Sử dụng Vue Router API để kiểm tra xem hai route có giống nhau không
        //    Hàm này kiểm tra name, path, query, và params một cách chính xác.
        //    route.isEqual là không dùng nữa, thay bằng:

        // Tùy chọn 1: So sánh tên (nếu liên kết chỉ dùng name, như trong nav của bạn)
        // Đây là cách đơn giản nhất và thường đủ cho navigation chính.
        return route.name === resolved.name
    }

    const classes = (to: RouteLocationRaw) => (isActive(to) ? active : inactive)

    return { isActive, classes }
}
