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
    return null;
  }
  return <IconComponent size={size} className={color} />;
};

const icons = {
  // Arrows
  'arrow-down': RiIcons.RiArrowDownLine,
  'arrow-down-s': RiIcons.RiArrowDownSLine,
  'arrow-up-s': RiIcons.RiArrowUpSLine,
  'arrow-left': RiIcons.RiArrowLeftLine,
  'arrow-left-double': RiIcons.RiArrowLeftDoubleLine,
  'arrow-left-down': RiIcons.RiArrowLeftDownLine,
  'arrow-left-s': RiIcons.RiArrowLeftSLine,
  'arrow-right-s': RiIcons.RiArrowRightSLine,
  'arrow-right-double': RiIcons.RiArrowRightDoubleLine,
  'arrow-right-up': RiIcons.RiArrowRightUpLine,
  'arrow-up': RiIcons.RiArrowUpLine,
  'arrow-turn-back-line': RiIcons.RiArrowTurnBackLine,
  'arrow-turn-forward-line': RiIcons.RiArrowTurnForwardLine,
  'arrow-go-back-line': RiIcons.RiArrowGoBackLine,
  'arrow-go-forward-line': RiIcons.RiArrowGoForwardLine,

  // Buildings
  building: RiIcons.RiBuildingLine,
  store: RiIcons.RiStoreLine,

  // Business
  archive: RiIcons.RiArchiveLine,
  'article-line': RiIcons.RiArticleLine,
  'bar-chart': RiIcons.RiBarChartLine,
  calendar: RiIcons.RiCalendarLine,
  'file-list-3': RiIcons.RiFileList3Line,
  'file-text-line': RiIcons.RiFileTextLine,
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
  whatsapp: RiIcons.RiWhatsappLine,

  // Map
  'map-pin-2': RiIcons.RiMapPin2Line,
  'treasure-map-line': RiIcons.RiTreasureMapLine,
  truck: RiIcons.RiTruckLine,
  flag: RiIcons.RiFlagLine,

  // Others
  'box-1': RiIcons.RiBox1Line,
  key: RiIcons.RiKeyLine,
  'instance-line': RiIcons.RiInstanceLine,

  // System
  add: RiIcons.RiAddLine,
  check: RiIcons.RiCheckLine,
  'check-circle': RiIcons.RiCheckboxCircleLine,
  close: RiIcons.RiCloseLine,
  'close-circle': RiIcons.RiCloseCircleLine,
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
  trash: RiIcons.RiDeleteBin7Line,
  upload: RiIcons.RiUploadLine,
  'upload-cloud-2-line': RiIcons.RiUploadCloud2Line,
  time: RiIcons.RiTimeLine,
  scan: RiIcons.RiQrScan2Line,
  router: RiIcons.RiRouterLine,
  radar: RiIcons.RiRfidLine,

  //User & Faces
  'account-circle': RiIcons.RiAccountCircleLine,
  'building-4-line': RiIcons.RiBuilding4Line,
  group: RiIcons.RiGroupLine,
  user: RiIcons.RiUserLine,
  'user-add': RiIcons.RiUserAddLine,
  'camera-line': RiIcons.RiCameraLine,
  like: RiIcons.RiThumbUpLine,
  dislike: RiIcons.RiThumbDownLine,

  //Weather
  moon: RiIcons.RiMoonLine,
  snowy: RiIcons.RiSnowyLine,
  sun: RiIcons.RiMoonLine,

  //Media
  'notification-3': RiIcons.RiNotification3Line,
};
Icon.displayName = 'Icon';
export { Icon, icons, IconProps };
