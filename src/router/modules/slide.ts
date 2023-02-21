import {RouteRecordRaw} from "vue-router";
import Layout from "@/layout/index.vue";
import {Film} from "@vicons/ionicons5";
import {renderIcon} from "@/utils";

const routerName = "slide";

/**
 * @param name 路由名称, 必须设置,且不能重名
 * @param meta 路由元信息（路由附带扩展信息）
 * @param redirect 重定向地址, 访问这个路由时,自定进行重定向
 * @param meta.disabled 禁用整个菜单
 * @param meta.title 菜单名称
 * @param meta.icon 菜单图标
 * @param meta.sort 排序越小越排前
 * */

const routes: Array<RouteRecordRaw> = [
    {
        path: "/slide",
        name: routerName,
        component: Layout,
        redirect: "/slide/list",
        meta: {
            title: "轮播管理",
            icon: renderIcon(Film),
            sort: 6,
        },
        children: [
            {
                path: "list",
                name: `${routerName}_list`,
                meta: {
                    title: "轮播管理",
                    icon: renderIcon(Film),
                },
                component: () => import("@/views/slide/index.vue"),
            }
        ]
    }
];

export default routes;