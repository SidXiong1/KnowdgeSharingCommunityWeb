import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter)
import video_page from "./components/video_page.vue"
import video from "./components/视频详情.vue"
import index from "./components/index.vue"
import PassageHome from "./components/PassageHome.vue"
import PassageView from "./components/PassageView.vue"
import talk from "./components/talk.vue"
import Detail from "./components/Detail"
import User from "./users/User"
import Messages from "./users/Messages"
import MyArt from "./users/col/MyArt"
import MyTopic from "./users/col/MyTopic"
import MyReply from "./users/col/MyReply"
import ColArt from "./users/col/ColArt"
import ColForum from "./users/col/ColForum"
import ColUsers from "./users/col/ColUsers"
import login from "./components/login"
import videoDetail from "./components/VideoDetail"
import register from "./components/register"

const router = new VueRouter({
    routes: [{
        path: "/video_page",
        component: video_page
    }, {
        path: "/register",
        component: register
    }, {
        path: "/videoDetail",
        component: videoDetail
    }, {
        path: "/",
        component: login
    }, {
        path: "/video",
        component: video
    },
    {
        path: "/index",
        component: index
    },
    {
        path: "/ph",
        component: PassageHome
    }, {
        path: "/pw",
        component: PassageView
    },
    {
        path: "/talk",
        component: talk
    },
    {
        path: "/Detail",
        component: Detail
    },
    {
        path: "/user",
        component: User
        , children: [
            {
                path: "/messages",
                component: Messages
            }, {
                path: "/myArt",
                component: MyArt
            }, {
                path: "/myTopic",
                component: MyTopic
            }, {
                path: "/myReply",
                component: MyReply
            }, {
                path: "/colArt",
                component: ColArt
            }, {
                path: "/colUsers",
                component: ColUsers
            }, {
                path: "/colForum",
                component: ColForum
            }
        ]
    }

    ]
})
export default router