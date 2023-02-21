import {RouteRecordRaw} from "vue-router";
import Layout from "@/layout/index.vue";
import {Link} from "@vicons/ionicons5";
import {renderIcon} from "@/utils";

const routerName = "link";

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
        path: "/link",
        name: routerName,
        component: Layout,
        redirect: "/link/list",
        meta: {
            title: "友情链接",
            icon: renderIcon(Link),
            sort: 7,
        },
        children: [
            {
                path: "list",
                name: `${routerName}_list`,
                meta: {
                    title: "友情链接",
                    icon: renderIcon(Link),
                },
                component: () => import("@/views/link/index.vue"),
            }
        ]
    }
];

export default routes;