import React from 'react';
import * as RiIcons from 'react-icons/ri';

interface IconProps {
  name: keyof typeof icons;
  size?: number;
  color?: string;
}

const Icon: React.FC<IconProps> = ({
  name,
  size = 20,
  color = 'text-neutral900',
}) => {
  const IconComponent = icons[name];

  if (!IconComponent) {
    console.error(`Icon "${name}" not found.`);
    return null;
  }
  return <IconComponent size={size} className={color} />;
};

export const icons = {
  // Arrows
  'arrow-down-s': RiIcons.RiArrowDownSLine,
  'arrow-left': RiIcons.RiArrowLeftLine,
  'arrow-left-double': RiIcons.RiArrowLeftDoubleLine,
  'arrow-left-down': RiIcons.RiArrowLeftDownLine,
  'arrow-left-s': RiIcons.RiArrowLeftSLine,
  'arrow-right-s': RiIcons.RiArrowRightSLine,
  'arrow-right-double': RiIcons.RiArrowRightDoubleLine,
  'arrow-right-up': RiIcons.RiArrowRightUpLine,

  // Buildings
  building: RiIcons.RiBuildingLine,
  store: RiIcons.RiStoreLine,

  // Business
  archive: RiIcons.RiArchiveLine,
  'bar-chart': RiIcons.RiBarChartLine,
  calendar: RiIcons.RiCalendarLine,
  'file-list-3': RiIcons.RiFileList3Line,
  'inbox-2': RiIcons.RiInbox2Line,
  links: RiIcons.RiLinksLine,
  mail: RiIcons.RiMailLine,
  'price-tag-3': RiIcons.RiPriceTag3Line,
  safe: RiIcons.RiSafeLine,
  'safe-open': RiIcons.RiSafe2Line,
  'shake-hands': RiIcons.RiShakeHandsLine,
  transfer: RiIcons.RiArrowLeftLine,

  // Design
  'edit-box': RiIcons.RiEditBoxLine,
  layout: RiIcons.RiLayoutLine,
  'layout-grid': RiIcons.RiLayoutGridLine,
  tools: RiIcons.RiToolsLine,

  // Device
  computer: RiIcons.RiComputerLine,
  'hard-drive-2': RiIcons.RiHardDrive2Line,

  // Document
  book: RiIcons.RiBookLine,
  'file-copy': RiIcons.RiFileCopyLine,
  'file-copy-2': RiIcons.RiFileCopy2Line,
  survey: RiIcons.RiSurveyLine,

  // Finance
  gift: RiIcons.RiGiftLine,
  'coupon-3': RiIcons.RiCoupon3Line,
  'senai-coin': RiIcons.RiCoinLine,
  'shopping-bag': RiIcons.RiShoppingBagLine,
  wallet: RiIcons.RiWalletLine,
  'bank-card': RiIcons.RiBankCardLine,

  // Learing
  award: RiIcons.RiAwardLine,

  // Logo
  facebook: RiIcons.RiFacebookLine,

  // Map
  'map-pin-2': RiIcons.RiMapPin2Line,
  truck: RiIcons.RiTruckLine,

  // Others
  'box-1': RiIcons.RiBox1Line,
  key: RiIcons.RiKeyLine,

  // System
  add: RiIcons.RiAddLine,
  check: RiIcons.RiCheckLine,
  'check-circle': RiIcons.RiCheckboxCircleLine,
  close: RiIcons.RiCloseLine,
  dashboard: RiIcons.RiDashboardLine,
  download: RiIcons.RiDownload2Line,
  'error-warning': RiIcons.RiErrorWarningLine,
  eye: RiIcons.RiEyeLine,
  'eye-close': RiIcons.RiEyeCloseLine,
  'file-list': RiIcons.RiFileList2Line,
  'filter-2': RiIcons.RiFilter2Line,
  function: RiIcons.RiFunctionLine,
  home: RiIcons.RiHomeLine,
  list: RiIcons.RiLinksLine,
  lock: RiIcons.RiLockLine,
  logout: RiIcons.RiLogoutBoxLine,
  'more-2': RiIcons.RiMore2Line,
  question: RiIcons.RiQuestionLine,
  save: RiIcons.RiSave3Line,
  search: RiIcons.RiSearchLine,
  'send-plane': RiIcons.RiSendPlane2Line,
  settings: RiIcons.RiSettings2Line,
  'share-circle': RiIcons.RiShareCircleLine,
  slash: RiIcons.RiForbidLine,
  substract: RiIcons.RiSubtractLine,
  trash: RiIcons.RiDeleteBin2Line,
  upload: RiIcons.RiUploadLine,
  time: RiIcons.RiTimeLine,

  //User & Faces
  'account-circle': RiIcons.RiAccountCircleLine,
  group: RiIcons.RiGroupLine,
  user: RiIcons.RiUserLine,
  'user-add': RiIcons.RiUserAddLine,

  //Weather
  moon: RiIcons.RiMoonLine,
  snowy: RiIcons.RiSnowyLine,
  sun: RiIcons.RiMoonLine,
};

export { Icon };
