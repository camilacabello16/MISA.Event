import React from 'react';
import PropTypes from 'prop-types';
import ChevronDown from './ChevronDown';
import ChevronUp from './ChevronUp';
import IconAddFile from './IconAddFile';
import IconBack from './IconBack';
import IconBell from './IconBell';
import IconCalendar from './IconCalendar';
import IconCheck from './IconCheck';
import IconCloseBig from './IconCloseBig';
import IconCloseSmall from './IconCloseSmall';
import IconEdit from './IconEdit';
import IconEdit2 from './IconEdit2';
import IconEmail from './IconEmail';
import IconExport from './IconExport';
import IconHistory from './IconHistory';
import IconEye from './IconEye';
import IconLocation from './IconLocation';
import IconMore from './IconMore';
import IconPhone from './IconPhone';
import IconPlus from './IconPlus';
import IconSearch from './IconSearch';
import IconShare from './IconShare';
import IconTrash from './IconTrash';
import MenuIconCalendarActive from './MenuIconCalendarActive';
import MenuIconCalendarDefault from './MenuIconCalendarDefault';
import MenuIconCardActive from './MenuIconCardActive';
import MenuIconCardDefault from './MenuIconCardDefault';
import MenuIconContactActive from './MenuIconContactActive';
import MenuIconContactDefault from './MenuIconContactDefault';
import MenuIconSettingsActive from './MenuIconSettingsActive';
import MenuIconSettingsDefault from './MenuIconSettingsDefault';
import IconNotification from './IconNotification';
import IconUserCheck from './IconUserCheck';
import IconHideMenu from './IconHideMenu';
import IconLogo from './IconLogo'
import LogoMisaEvent from './LogoMisaEvent'
import IconOrientation from './IconOrientation'
import IconMessenger from './IconMessenger'
import IconMouse from './IconMouse'
import ImageNewYear from './ImageNewYear'
Svg.propTypes = {
    name: PropTypes.string,//Tên icon
}

/**
 * Trả về icon theo tên icon
 * @param {*} props 
 * @author NTGIANG (11/01/2021)
 */
function Svg(props) {
    switch (props.name) {
        case "ChevronDown":
            return <ChevronDown {...props} />;
        case "ChevronUp":
            return <ChevronUp {...props} />;
        case "IconAddFile":
            return <IconAddFile {...props} />;
        case "IconBack":
            return <IconBack {...props} />;
        case "IconBell":
            return <IconBell {...props} />;
        case "IconCalendar":
            return <IconCalendar {...props} />;
        case "IconCheck":
            return <IconCheck {...props} />;
        case "IconCloseBig":
            return <IconCloseBig {...props} />;
        case "IconCloseSmall":
            return <IconCloseSmall {...props} />;
        case "IconEdit":
            return <IconEdit {...props} />;
        case "IconEmail":
            return <IconEmail {...props} />;
        case "IconExport":
            return <IconExport {...props} />;
        case "IconEye":
            return <IconEye {...props} />;
        case "IconHistory":
            return <IconHistory {...props} />;
        case "IconLocation":
            return <IconLocation {...props} />;
        case "IconMore":
            return <IconMore {...props} />;
        case "IconPhone":
            return <IconPhone {...props} />;
        case "IconPlus":
            return <IconPlus {...props} />;
        case "IconSearch":
            return <IconSearch {...props} />;
        case "IconShare":
            return <IconShare {...props} />;
        case "IconTrash":
            return <IconTrash {...props} />;
        case "MenuIconCalendarActive":
            return <MenuIconCalendarActive {...props} />;
        case "MenuIconCalendarDefault":
            return <MenuIconCalendarDefault {...props} />;
        case "MenuIconCardActive":
            return <MenuIconCardActive {...props} />;
        case "MenuIconCardDefault":
            return <MenuIconCardDefault {...props} />;
        case "MenuIconContactActive":
            return <MenuIconContactActive {...props} />;
        case "MenuIconContactDefault":
            return <MenuIconContactDefault {...props} />;
        case "MenuIconSettingsActive":
            return <MenuIconSettingsActive {...props} />;
        case "MenuIconSettingsDefault":
            return <MenuIconSettingsDefault {...props} />;
        case "IconNotification":
            return <IconNotification {...props} />;
        case "IconUserCheck":
            return <IconUserCheck {...props} />;
        case "IconEdit2":
            return <IconEdit2 {...props} />;
        case "IconHideMenu":
            return <IconHideMenu {...props} />;
        case "IconLogo":
            return <IconLogo {...props}/>
        case "LogoMisaEvent":
            return <LogoMisaEvent {...props}/>
        case "IconOrientation":
            return <IconOrientation {...props}/>
        case "IconMessenger":
            return <IconMessenger {...props}/>
        case "IconMouse":
            return <IconMouse {...props}/>
        case "ImageNewYear":
            return <ImageNewYear {...props}/>
        default:
            return <IconAddFile {...props} />;
    }
}

export default Svg;