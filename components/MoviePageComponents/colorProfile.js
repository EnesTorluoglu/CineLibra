import {Appearance} from "react-native";

const colorScheme = Appearance.getColorScheme();


const darkModeColors = {
    main_weak: 'rgb(25, 26, 28)',
    main: 'rgb(45, 45, 45)',
    main_strong: 'rgb(0, 0, 0)',
    accent_strong: 'rgb(235, 126, 72)',
    accent: 'rgb(155, 57, 34)',
    accent_weak: 'rgb(242, 97, 63)',
    text_color: 'rgb(255, 255, 255)',
    text_color_white: 'rgba(255,255,255,0.9)',
    text_color_weak: 'rgba(200, 200, 200, 0.7)',
    bg_filter_color: 'rgba(10, 10, 10, 0.3)',
    bg_filter_color_strong: 'rgba(0, 0, 0, 0.5)',
    opacity_color: 'rgba(50, 45, 45 ,0.4)',
    opacity_color_strong: 'rgba(30, 25, 25 ,0.4)',
    highlight_color: 'rgba(242, 97, 63, 0.6)',
    text_color_ghost: 'rgba(200, 200, 200, 0.7)',
}

const BookDarkModeColors = {
    main_weak: 'rgb(249, 246, 247)',
    main_strong: 'rgb(209, 206, 207)',
    main: 'rgb(228, 226, 227)',
    accent: 'rgb(52, 106, 235)',
    accent_weak: 'rgb(72, 126, 255)',
    accent_strong: 'rgb(0, 103, 255)',
    text_color: 'rgba(0, 0, 0, 1)',
    text_color_white: 'rgba(255,255,255,0.9)',
    text_color_weak: 'rgba(200, 200, 200, 0.8)',
    bg_filter_color: 'rgba(20, 30, 60, 0.5)',
    bg_filter_color_strong: 'rgba(20, 30, 60, 0.4)',
    opacity_color: 'rgba(40, 60, 80 , 0.5)',
    opacity_color_strong: 'rgba(40, 60, 80 ,0.7)',
    highlight_color: 'rgba(72, 126, 255, 0.6)',
    text_color_ghost: 'rgba(200, 200, 200, 0.7)',
}

const lightModeColors = {
    main_weak: 'rgb(249, 246, 247)',
    main_strong: 'rgb(209, 206, 207)',
    main: 'rgb(228, 226, 227)',
    accent: 'rgb(235, 106, 52)',
    accent_weak: 'rgb(255, 126, 72)',
    accent_strong: 'rgb(255, 103, 0)',
    text_color: 'rgba(0, 0, 0, 1)',
    text_color_white: 'rgba(255,255,255,0.9)',
    text_color_weak: 'rgba(200, 200, 200, 0.9)',
    bg_filter_color: 'rgba(200, 120, 90, 0.3)',
    bg_filter_color_strong: 'rgba(180, 100, 70, 0.4)',
    opacity_color: 'rgba(140,100,80,0.5)',
    opacity_color_strong: 'rgba(140, 100, 80 ,0.7)',
    highlight_color: 'rgba(255, 126, 72, 0.6)',
    text_color_ghost: 'rgba(150, 150, 150, 0.9)',
}

const BookLightModeColors = {
    main_weak: 'rgb(249, 246, 247)',
    main_strong: 'rgb(209, 206, 207)',
    main: 'rgb(228, 226, 227)',
    accent: 'rgb(52, 106, 235)',
    accent_weak: 'rgb(72, 126, 255)',
    accent_strong: 'rgb(0, 103, 255)',
    text_color: 'rgba(0, 0, 0, 1)',
    text_color_white: 'rgba(255,255,255,0.9)',
    text_color_weak: 'rgba(200, 200, 200, 0.9)',
    bg_filter_color: 'rgba(90, 120, 200, 0.3)',
    bg_filter_color_strong: 'rgba(70, 100, 180, 0.4)',
    opacity_color: 'rgba(140, 160, 220 , 0.5)',
    opacity_color_strong: 'rgba(140, 160, 220 ,0.8)',
    highlight_color: 'rgba(72, 126, 255, 0.6)',
    text_color_ghost: 'rgba(150, 150, 150, 0.9)',
}

const lightModeDependencies = {
    statusbar_color:'light-mode',
}

const darkModeDependencies = {
    statusbar_color:'dark-mode',
}

export const colors = colorScheme === 'dark' ? darkModeColors : lightModeColors;
export const BookColors = colorScheme === 'dark' ? BookDarkModeColors : BookLightModeColors;
export const modeDependencies = colorScheme === 'dark' ? darkModeDependencies : lightModeDependencies;
