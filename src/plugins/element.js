/*
 * @Author: your name
 * @Date: 2021-01-07 10:51:26
 * @LastEditTime: 2021-01-08 16:31:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \element_vue3.0\src\plugins\element.js
 */

import {
    ElAlert,
    ElAside,
    ElAutocomplete,
    ElAvatar,
    ElBacktop,
    ElBadge,
    ElBreadcrumb,
    ElBreadcrumbItem,
    ElButton,
    ElButtonGroup,
    ElCalendar,
    ElCard,
    ElCarousel,
    ElCarouselItem,
    ElCascader,
    ElCascaderPanel,
    ElCheckbox,
    ElCheckboxButton,
    ElCheckboxGroup,
    ElCol,
    ElCollapse,
    ElCollapseItem,
    ElCollapseTransition,
    ElColorPicker,
    ElContainer,
    ElDatePicker,
    ElDialog,
    ElDivider,
    ElDrawer,
    ElDropdown,
    ElDropdownItem,
    ElDropdownMenu,
    ElFooter,
    ElForm,
    ElFormItem,
    ElHeader,
    ElIcon,
    ElImage,
    ElInput,
    ElInputNumber,
    ElLink,
    ElMain,
    ElMenu,
    ElMenuItem,
    ElMenuItemGroup,
    ElOption,
    ElOptionGroup,
    ElPageHeader,
    ElPagination,
    ElPopconfirm,
    ElPopover,
    ElPopper,
    ElProgress,
    ElRadio,
    ElRadioButton,
    ElRadioGroup,
    ElRate,
    ElRow,
    ElScrollbar,
    ElSelect,
    ElSlider,
    ElStep,
    ElSteps,
    ElSubmenu,
    ElSwitch,
    ElTabPane,
    ElTable,
    ElTableColumn,
    ElTabs,
    ElTag,
    ElTimePicker,
    ElTimeSelect,
    ElTimeline,
    ElTimelineItem,
    ElTooltip,
    ElTransfer,
    ElTree,
    ElUpload,
    ElInfiniteScroll,
    ElLoading,
    ElMessage,
    ElMessageBox,
    ElNotification
} from "element-plus";

const components = [
    ElAlert,
    ElAside,
    ElAutocomplete,
    ElAvatar,
    ElBacktop,
    ElBadge,
    ElBreadcrumb,
    ElBreadcrumbItem,
    ElButton,
    ElButtonGroup,
    ElCalendar,
    ElCard,
    ElCarousel,
    ElCarouselItem,
    ElCascader,
    ElCascaderPanel,
    ElCheckbox,
    ElCheckboxButton,
    ElCheckboxGroup,
    ElCol,
    ElCollapse,
    ElCollapseItem,
    ElCollapseTransition,
    ElColorPicker,
    ElContainer,
    ElDatePicker,
    ElDialog,
    ElDivider,
    ElDrawer,
    ElDropdown,
    ElDropdownItem,
    ElDropdownMenu,
    ElFooter,
    ElForm,
    ElFormItem,
    ElHeader,
    ElIcon,
    ElImage,
    ElInput,
    ElInputNumber,
    ElLink,
    ElMain,
    ElMenu,
    ElMenuItem,
    ElMenuItemGroup,
    ElOption,
    ElOptionGroup,
    ElPageHeader,
    ElPagination,
    ElPopconfirm,
    ElPopover,
    ElPopper,
    ElProgress,
    ElRadio,
    ElRadioButton,
    ElRadioGroup,
    ElRate,
    ElRow,
    ElScrollbar,
    ElSelect,
    ElSlider,
    ElStep,
    ElSteps,
    ElSubmenu,
    ElSwitch,
    ElTabPane,
    ElTable,
    ElTableColumn,
    ElTabs,
    ElTag,
    ElTimePicker,
    ElTimeSelect,
    ElTimeline,
    ElTimelineItem,
    ElTooltip,
    ElTransfer,
    ElTree,
    ElUpload
];

const plugins = [
    ElInfiniteScroll,
    ElLoading,
    ElMessage,
    ElMessageBox,
    ElNotification
];
import lang from "element-plus/lib/locale/lang/zh-cn";
import locale from "element-plus/lib/locale";
import "dayjs/locale/zh-cn";
import "element-plus/lib/theme-chalk/base.css";
locale.use(lang);
export default {
    install: app => {
        components.forEach(component => {
            app.component(component.name, component);
        });

        plugins.forEach(plugin => {
            app.use(plugin);
        });
        Object.defineProperties(app.config.globalProperties, {
            $ELEMENT: {
                get() {
                    return { size: "medium" };
                }
            }
        });
    }
};
