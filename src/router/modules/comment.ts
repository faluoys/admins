import {RouteRecordRaw} from "vue-router";
import Layout from "@/layout/index.vue";
import {ChatbubbleEllipsesOutline} from "@vicons/ionicons5";
import {renderIcon} from "@/utils";

const routerName = "comment";

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
        path: "/comment",
        name: routerName,
        component: Layout,
        redirect: "/comment/list",
        meta: {
            title: "评论管理",
            icon: renderIcon(ChatbubbleEllipsesOutline),
            sort: 5,
        },
        children: [
            {
                path: "list",
                name: `${routerName}_list`,
                meta: {
                    title: "评论管理",
                    icon: "",
                },
                component: () => import("@/views/comment/index.vue"),
            }
        ]
    }
];

export default routes;