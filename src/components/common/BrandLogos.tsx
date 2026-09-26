import React from 'react';

export interface LogoProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

// 1. Delta Air Lines
export const DeltaLogo: React.FC<LogoProps> = ({ className = 'w-5 h-5', ...props }) => (
  <svg role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <title>Delta Air Lines</title>
    <path d="M24 13.455h-.689l-.288-.739h-1.2l-.289.739h-.644l1.233-2.96h.666zm-1.16-1.233l-.411-1.044-.411 1.044zm-4.315 1.233h.66v-2.438h.995v-.51h-2.644v.51h.989zm-3.826 0h1.927v-.511H15.36v-2.438h-.661zm-3.282-2.438h1.416v-.51h-2.077v2.948h2.121v-.511h-1.46v-.766h1.25v-.511h-1.25zm-4.981 2.438h1.038c1.072 0 1.71-.555 1.71-1.472 0-.916-.638-1.471-1.71-1.471H6.436zm.655-2.438h.383c.694 0 1.044.344 1.044.96 0 .617-.344.961-1.044.961h-.383zm-2.277 2.155a.15.15 0 0 1 .15.15.15.15 0 0 1-.15.15.15.15 0 0 1-.15-.15.15.15 0 0 1 .15-.15m0 .277a.13.13 0 0 0 .134-.127c0-.073-.056-.128-.134-.128a.126.126 0 0 0-.127.128c0 .072.055.127.127.127m-.033-.039H4.76v-.177h.067c.038 0 .055.016.055.05 0 .033-.022.044-.044.05l.055.077h-.028l-.05-.077h-.033zm0-.1h.028c.022 0 .05 0 .05-.027 0-.022-.022-.028-.039-.028h-.039zM0 13.85h4.626l-2.31-.978zm.172-.395l2.144-1.033 2.143 1.033-2.143-3.304Z" />
  </svg>
);

// 2. United Airlines
export const UnitedLogo: React.FC<LogoProps> = ({ className = 'w-5 h-5', ...props }) => (
  <svg role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <title>United Airlines</title>
    <path d="M5.327 3.067c8.654 0 15.695 7.068 15.695 15.754 0 1.762-.298 3.515-.875 5.179H24V0H0v4.003l.019-.007a15.569 15.569 0 0 1 5.308-.929M0 10.534c.975-1.389 1.116-2.983.26-3.761a1.56 1.56 0 0 0-.26-.19zm5.027-5.057c-.863-.99-2.3-1.33-3.969-1.092l-.135.02a7.873 7.873 0 0 0-.386.077C.28 4.542.104 4.6 0 4.64v.5a8.47 8.47 0 0 1 .505-.37c.333-.07.656-.116.968-.136C.99 4.91.434 5.283 0 5.627v.385l.015.009s1.224-.969 2.196-1.386c.234.017.458.05.672.099A14.624 14.624 0 0 0 .284 6.168c.15.088.285.199.303.213.019-.012 1.427-.892 2.977-1.42.21.096.413.216.589.351-1.688.474-3.31 1.321-3.31 1.321.092.106.172.221.242.344l.029-.011c1.727-.74 3.562-1.118 3.562-1.118.143.196.262.416.352.658 0 0-1.647.188-3.765.868.093.292.119.512.119.515 0 0 1.997-.447 3.839-.497.026.296.016.628-.026.969-1.09-.058-3.69.08-3.791.089 0 0-.01.374-.107.726 0 0 1.899.061 3.626.383a8.406 8.406 0 0 1-.507 1.22c-1.15-.346-2.897-.766-3.357-.871a5.64 5.64 0 0 1-.453.88s2.134.93 2.953 1.386h.002v.001c-.356.532-1.06 1.277-1.06 1.277a73.343 73.343 0 0 0-.58-.43L.005 11.685 0 11.68v1.765l1.107 1.292c-.364.294-.736.562-1.107.802v1.053l.041-.026a15.948 15.948 0 0 0 1.492-1.151c3.819-3.323 5.383-7.773 3.495-9.94" />
  </svg>
);

// 3. American Airlines
export const AmericanLogo: React.FC<LogoProps> = ({ className = 'w-5 h-5', ...props }) => (
  <svg role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <title>American Airlines</title>
    <path d="M0 .244h3.264c1.377 0 1.942.563 2.499 1.116.637.58 2.57 3.196 6.657 8.303H7.997c-1.809 0-2.38-.308-3.08-1.375zm10.424 17.072l-2.427-4.013c-.292-.455-.372-.854-.372-1.318 0-.51.217-.79 1.053-1.233.973-.466 2.933-.67 4.954-.67 3.283 0 4.07 1.055 4.405 2.192 0 0-.464-.185-1.554-.185-3.459 0-6.223 1.68-6.223 4.221 0 .534.164 1.006.164 1.006zm4.936-3.417c-2.547.089-5.032 1.869-4.936 3.416l2.7 4.486c.836 1.344 2.215 1.955 3.932 1.955H24l-8.13-9.852a5.55 5.55 0 0 0-.51-.005Z" />
  </svg>
);

// 4. Southwest Airlines
export const SouthwestLogo: React.FC<LogoProps> = ({ className = 'w-5 h-5', ...props }) => (
  <svg role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <title>Southwest Airlines</title>
    <path d="M22.163 2.419C21.038 1.219 19.35.58 17.437.58c-2.062 0-3.637.675-4.725 1.275 2.063 1.163 6.526 3.75 11.175 7.163.075-.45.113-.938.113-1.388-.038-2.175-.675-4.012-1.837-5.212zm1.35 8.212C18.186 6.244 15 4.031 11.55 1.97 10.612 1.406 8.775.58 6.675.58 4.688.581 3 1.22 1.837 2.42 1.087 3.206.563 4.18.262 5.38 3 7.294 10.462 12.656 18 18.581c2.512-2.362 4.613-5.1 5.512-7.95zM0 7.781c0 6.15 6.487 11.85 12 15.638 1.575-1.088 3.225-2.325 4.8-3.713A736.871 736.871 0 0 0 .15 6.131C.038 6.62 0 7.181 0 7.781Z" />
  </svg>
);

// 5. Virgin Atlantic
export const VirginLogo: React.FC<LogoProps> = ({ className = 'w-5 h-5', ...props }) => (
  <svg role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <title>Virgin Atlantic</title>
    <path d="M14 3.559c-3.102 0-3.836.489-5.06 1.877L0 15.232c7.143-.326 9.348 6.858 16.572 4.858L24 3.559H14zm-2.477 1.586a.608.608 0 0 1 .395.128c.204.164.164.409.164.409-.04.367-.408.611-.408.611-.327.286-.776 1.102-.776 1.102-.49.775-1.06 2.286-1.55 3.796-.653 2.286-1.063 4.408-1.104 4.612-.04.204-.122.449-.326.449-.286 0-.326-.367-.326-.408 0-.041-.367-4.49-.367-4.49s-.042-.204-.082-.204c0 0-.08-.04-.163.164l-.408.897c-.163.408-.449.246-.449.246-.245-.122-.082-.408-.082-.408l.898-2.246c.205-.49.53-.45.53-.45.285.041.287.327.287.45.04.122.326 3.43.326 3.43.04.367.082.244.082.244C8.858 9.517 10.94 5.6 10.94 5.6c.197-.34.408-.445.584-.455z" />
  </svg>
);

// 6. British Airways
export const BritishAirwaysLogo: React.FC<LogoProps> = ({ className = 'w-5 h-5', ...props }) => (
  <svg role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <title>British Airways</title>
    <path d="M23.489 13.252c-.25.212-.605.444-1.241.767-1.347.72-2.198.983-2.198.983s-1.617-.234-4.207-1.007c0 0 1.306-.378 1.93-.581a40.11 40.11 0 0 0 1.958-.681c1.055-.396 1.73-.761 2.18-1.088.03-.022.058-.046.085-.068 0 0 .32.036.593.113.294.083.604.245.786.386.191.147.28.308.308.358a.681.681 0 0 1 .071.226s.014.085-.003.177a.579.579 0 0 1-.147.313zM24 12.196a.662.662 0 0 0-.08-.157 1.348 1.348 0 0 0-.197-.23 1.685 1.685 0 0 0-.227-.178c-.354-.232-.81-.362-1.215-.416-.627-.083-1.342-.07-1.411-.07-.23-.005-1.722.007-2.105.015-1.702.034-3.787.039-4.333.038-5.636.027-8.089-.094-10.82-.642C1.289 10.094 0 9.658 0 9.658c2.05-.073 14.004-.568 16.186-.627 1.427-.04 2.44-.048 3.253 0 .413.023.802.058 1.287.14a6.2 6.2 0 0 1 1.064.286c.486.18.893.442 1.096.707 0 0 .06.06.14.17.093.126.197.282.234.34.294.447.434.73.484.828.052.102.1.209.145.315.044.104.063.166.076.21.02.064.03.125.035.17Z" />
  </svg>
);

// 7. Air France / KLM Flying Blue
export const AirFranceLogo: React.FC<LogoProps> = ({ className = 'w-5 h-5', ...props }) => (
  <svg role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <title>Air France</title>
    <path d="M13.776 3.9L5.184 16.332C4.051 17.969 2.208 19.548 0 19.721v.379h9.552c2.544 0 4.397-1.656 5.616-3.48L24 3.9Z" />
  </svg>
);

// 8. Chase Octagon
export const ChaseLogo: React.FC<LogoProps> = ({ className = 'w-5 h-5', ...props }) => (
  <svg role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <title>Chase</title>
    <path d="M0 15.415c0 .468.38.85.848.85h5.937V.575L0 7.72v7.695m15.416 8.582c.467 0 .846-.38.846-.849v-5.937H.573l7.146 6.785h7.697M24 8.587a.844.844 0 0 0-.847-.846h-5.938V23.43l6.782-7.148L24 8.586M8.585.003a.847.847 0 0 0-.847.847v5.94h15.688L16.282.003H8.585Z" />
  </svg>
);

// 9. American Express Box
export const AmexLogo: React.FC<LogoProps> = ({ className = 'w-5 h-5', ...props }) => (
  <svg role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <title>American Express</title>
    <path d="M16.015 14.378c0-.32-.135-.496-.344-.622-.21-.12-.464-.135-.81-.135h-1.543v2.82h.675v-1.027h.72c.24 0 .39.024.478.125.12.13.104.38.104.55v.35h.66v-.555c-.002-.25-.017-.376-.108-.516-.06-.08-.18-.18-.33-.234l.02-.008c.18-.072.48-.297.48-.747zm-.87.407l-.028-.002c-.09.053-.195.058-.33.058h-.81v-.63h.824c.12 0 .24 0 .33.05.098.048.156.147.15.255 0 .12-.045.215-.134.27zM20.297 15.837H19v.6h1.304c.676 0 1.05-.278 1.05-.884 0-.28-.066-.448-.187-.582-.153-.133-.392-.193-.73-.207l-.376-.015c-.104 0-.18 0-.255-.03-.09-.03-.15-.105-.15-.21 0-.09.017-.166.09-.21.083-.046.177-.066.272-.06h1.23v-.602h-1.35c-.704 0-.958.437-.958.84 0 .9.776.855 1.407.87.104 0 .18.015.225.06.046.03.082.106.082.18 0 .077-.035.15-.08.18-.06.053-.15.07-.277.07zM0 0v10.096L.81 8.22h1.75l.225.464V8.22h2.043l.45 1.02.437-1.013h6.502c.295 0 .56.057.756.236v-.23h1.787v.23c.307-.17.686-.23 1.12-.23h2.606l.24.466v-.466h1.918l.254.465v-.466h1.858v3.948H20.87l-.36-.6v.585h-2.353l-.256-.63h-.583l-.27.614h-1.213c-.48 0-.84-.104-1.08-.24v.24h-2.89v-.884c0-.12-.03-.12-.105-.135h-.105v1.036H6.067v-.48l-.21.48H4.69l-.202-.48v.465H2.235l-.256-.624H1.4l-.256.624H0V24h23.786v-7.108c-.27.135-.613.18-.973.18H21.09v-.255c-.21.165-.57.255-.914.255H14.71v-.9c0-.12-.018-.12-.12-.12h-.075v1.022h-1.8v-1.066c-.298.136-.643.15-.928.136h-.214v.915h-2.18l-.54-.617-.57.6H4.742v-3.93h3.61l.518.602.554-.6h2.412c.28 0 .74.03.942.225v-.24h2.177c.202 0 .644.045.903.225v-.24h3.265v.24c.163-.164.508-.24.803-.24h1.89v.24c.194-.15.464-.24.84-.24h1.176V0H0z" />
  </svg>
);

// 10. Capital One
export const CapitalOneLogo: React.FC<LogoProps> = ({ className = 'w-5 h-5', ...props }) => (
  <svg role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <title>Capital One</title>
    <path d="M2.5 12C2.5 6.75 6.75 2.5 12 2.5c3.2 0 6.04 1.58 7.78 4l-3.2 2.4A6.5 6.5 0 0 0 12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6c1.8 0 3.42-.8 4.54-2.07l3.22 2.42A9.97 9.97 0 0 1 12 21.5C6.75 21.5 2.5 17.25 2.5 12zm18.5-7.5l-9 4.5v3l9-4.5v-3z" />
  </svg>
);

// 11. Citi
export const CitiLogo: React.FC<LogoProps> = ({ className = 'w-5 h-5', ...props }) => (
  <svg role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <title>Citi</title>
    <path d="M12 2c-4.4 0-8.2 2.6-9.9 6.4l2.7 1.2C6.1 6.8 8.8 5 12 5c3.2 0 5.9 1.8 7.2 4.6l2.7-1.2C20.2 4.6 16.4 2 12 2zm-4.5 9.5a3.5 3.5 0 0 0-3.5 3.5 3.5 3.5 0 0 0 3.5 3.5 3.5 3.5 0 0 0 3.5-3.5h2A5.5 5.5 0 0 1 7.5 20.5 5.5 5.5 0 0 1 2 15a5.5 5.5 0 0 1 5.5-5.5c1.8 0 3.4.9 4.4 2.2l-1.5 1.3a3.46 3.46 0 0 0-2.9-1.5zm6 0v7h-2v-7h2zm5 2v5h-2v-5h-1v-2h1v-1.5c0-1.4 1.1-2.5 2.5-2.5h1.5v2h-1.5c-.3 0-.5.2-.5.5V11.5h2v2h-2z" />
  </svg>
);

// 12. Marriott Bonvoy
export const MarriottLogo: React.FC<LogoProps> = ({ className = 'w-5 h-5', ...props }) => (
  <svg role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <title>Marriott Bonvoy</title>
    <path d="M8.802 11.083l-1.178 2.41c-.8 1.425-1.931 3.167-3.646 3.603-.668.232-1.255.023-1.9-.023L0 20.476a1.626 1.626 0 0 0 .59.386c3.647 1.39 5.122-.1 8.722-8.238l3.403 7.249h4.53l-2.14-4.893 1.213-2.53 3.345 7.311 4.337.027-7.59-16.677-3.475 1.738 2.738 6.222-1.201 2.445L9.45 2.678l-3.7 1.877Z" />
  </svg>
);

// 13. World of Hyatt
export const HyattLogo: React.FC<LogoProps> = ({ className = 'w-5 h-5', ...props }) => (
  <svg role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <title>World of Hyatt</title>
    <path d="M4 3h3.5v7h9V3H20v18h-3.5v-7.5h-9V21H4V3zm7.5 7.5h1v1h-1v-1z" />
  </svg>
);

// 14. Hilton Honors
export const HiltonLogo: React.FC<LogoProps> = ({ className = 'w-5 h-5', ...props }) => (
  <svg role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <title>Hilton</title>
    <path d="M0 7.544v8.912h24V7.544H0zm23.588 8.503H.406V7.95h23.182v8.097zM3.682 14.41h-1.62v-.249l.324-.044V9.873l-.324-.045v-.242h1.62v.242l-.324.045v1.813h2.107V9.873l-.355-.045v-.242h1.647v.242l-.334.045v4.244l.334.044v.25H5.11v-.25l.355-.044v-1.933H3.358v1.933l.324.044v.25zm5.298 0H7.466v-.218l.31-.044V11.24l-.31-.045v-.218h1.203v3.17l.31.045v.218zm2.171.004H9.638v-.215l.303-.041V9.845l-.303-.044V9.59h1.203v4.568l.31.04v.216zm.941-3.116h-.634v-.32h.658v-.717l.88-.262v.978h.807v.32h-.81v2.043c0 .528.108.695.589.695.177 0 .334 0 .48-.037v.235c-.436.153-.804.218-1.114.218-.696 0-.856-.314-.856-.914v-2.24zm3.924 3.214c1.139 0 1.861-.715 1.861-1.786 0-1.176-.678-1.844-1.803-1.844-1.139 0-1.861.74-1.861 1.844 0 1.32.702 1.786 1.803 1.786z" />
  </svg>
);

// 15. IHG One Rewards
export const IHGLogo: React.FC<LogoProps> = ({ className = 'w-5 h-5', ...props }) => (
  <svg role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <title>IHG One Rewards</title>
    <path d="M3 4h3.5v16H3V4zm6 0h3.5v6.5h4V4H20v16h-3.5v-6.5h-4V20H9V4z" />
  </svg>
);

// 16. Starbucks Siren
export const StarbucksLogo: React.FC<LogoProps> = ({ className = 'w-5 h-5', ...props }) => (
  <svg role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <title>Starbucks</title>
    <path d="M13.2072 5.2801c-.1052-.0188-.6126-.104-1.2072-.104s-1.102.0848-1.2072.104c-.0605.0108-.0837-.0484-.0377-.0828.0417-.0308 1.2445-.9463 1.2445-.9463l1.244.9463c.0469.0344.024.0936-.0364.0828zm-2.0783 5.9446s-.0636.0228-.0804.0788c.252.1937.4257.6343.9515.6343s.6995-.4406.9511-.6343c-.0164-.0564-.08-.0788-.08-.0788s-.3293.0776-.8711.0776c-.5418 0-.8711-.0776-.8711-.0776zM12 10.4832c-.146 0-.178-.0552-.2777-.0548-.0948.0004-.2789.076-.319.1453a.1542.1542 0 00.0413.0948c.2129.032.309.1505.5558.1505.2469 0 .3425-.1185.5558-.1505a.1579.1579 0 00.0412-.0948c-.0396-.0692-.224-.1445-.3193-.1453-.1-.0008-.1324.0548-.2781.0548zm11.9868 2.27a11.964 11.964 0 01-.076.8528c-1.359.2249-1.8447-.986-3.2368-.9252.0832.2954.1508.5963.2029.9036 1.148-.0008 1.6105 1.0724 2.8878.9143-.0672.3281-.148.6519-.2413.9708-1.01.0992-1.3657-.9044-2.5345-.8767.0096.1664.0148.3345.0148.5041l-.0048.2805 2.2696.866a12.04 12.04 0 01-.3965.9479c-.6823-.0376-.9175-.9127-1.9555-.8431a9.0882 9.0882 0 01-.118.665c.9015-.0632 1.0955.7667 1.7414.834a12.2317 12.2317 0 01-.5302.8767c-.3826-.205-.7143-.8231-1.4398-.8612a8.6035 8.6035 0 00.195-.6994c-.6435 0-1.3794-.2509-1.9964-.8127.2-1.1388-1.5674-2.2984-1.5674-3.1324 0-.9059.4582-1.4073.4582-2.6285 0-.9063-.4402-1.8895-1.104-2.5614a2.2175 2.2175 0 00-.4114-.3309c.6098.7547 1.078 1.6494 1.078 2.6858 0 1.15-.535 1.757-.535 2.8186 0 1.0612 1.5526 1.9796 1.5526 3.074 0 .4305-.1377.851-.5914 1.677.697.6962 1.605 1.076 2.1908 1.076.19 0 .292-.058.3601-.2073a9.0925 9.0925 0 00.1665-.391c.631.0245.9199.5979 1.2692.8268-.1916.2573-.393.5057-.6038.7462-.234-.2593-.5486-.6954-1.0092-.8167a9.2087 9.2087 0 01-.2613.473c.3966.108.6679.5082.878.7715a12.1305 12.1305 0 01-.7075.6754c-.1532-.2384-.3917-.541-.659-.7042a8.3639 8.3639 0 01-.3077.391c.2272.154.4277.4313.5586.6574-.2833.2272-.5763.443-.8796.6446-.1496-1.2192-1.8138-2.0548-1.3653-3.4693-.1472.2493-.3229.561-.3229.9364 0 1.024 1.0908 1.8366 1.1776 2.8542-.226.1353-.4573.2625-.693.383-.0392-1.1185-1.194-2.3425-1.194-3.2604 0-1.0248 1.342-2.054 1.342-3.2636 0-1.2105-1.5485-2.0484-1.5485-3.1112 0-1.062.6586-1.673.6586-3.0343 0-.9972-.4738-2.0063-1.2056-2.651-.1297-.1144-.2573-.2052-.4106-.2849.6903.828 1.0904 1.579 1.0904 2.7186 0 1.2801-.7546 1.9908-.7546 3.244 0 1.2537 1.5197 1.9507 1.5197 3.1192 0 1.1684-1.4145 2.1532-1.4145 3.3536 0 1.092 1.2468 2.182 1.2653 3.4777a11.7704 11.7704 0 01-.8327.3257c.1584-1.3089-1.245-2.659-1.245-3.727 0-1.1676 1.4674-2.1712 1.4674-3.43 0-1.2597-1.4917-1.8451-1.4917-3.138 0-1.292.9151-2.0075.9151-3.4352 0-1.1129-.5494-2.1136-1.352-2.7338l-.0509-.0385c-.0756-.056-.138.0116-.0844.078.5682.7095.8719 1.427.8719 2.4894 0 1.306-1.0512 2.3673-1.0512 3.6325 0 1.4934 1.4117 1.9203 1.4117 3.1456 0 1.2248-1.5137 2.2048-1.5137 3.5053 0 1.206 1.4325 2.5445 1.1868 3.9366a11.6645 11.6645 0 01-.8743.192c.2689-1.7334-1.1364-2.9782-1.1364-4.1122 0-1.2277 1.5677-2.322 1.5677-3.5217 0-1.1316-1.1252-1.5014-1.2732-2.659-.0204-.158-.1473-.2753-.3221-.2461-.2285.0416-.5214.192-.9816.192-.4602 0-.753-.1508-.982-.192-.1744-.0288-.3013.0884-.3217.246-.1476 1.1577-1.2736 1.527-1.2736 2.659 0 1.1997 1.5681 2.2937 1.5681 3.5218 0 1.134-1.4053 2.3788-1.1368 4.1123a12.1233 12.1233 0 01-.8743-.1921c-.2457-1.3921 1.1872-2.7306 1.1872-3.9366 0-1.3005-1.5141-2.2805-1.5141-3.5053 0-1.2253 1.412-1.6522 1.412-3.1456 0-1.2652-1.0515-2.326-1.0515-3.6325 0-1.062.3037-1.7795.8723-2.4893.0532-.0665-.0088-.134-.0848-.078l-.0504.0384c-.802.6186-1.351 1.6193-1.351 2.7322 0 1.4277.9152 2.1431.9152 3.4352 0 1.2925-1.4917 1.878-1.4917 3.138 0 1.2588 1.4673 2.2624 1.4673 3.43 0 1.0684-1.4033 2.4181-1.2445 3.727a11.8995 11.8995 0 01-.833-.3257c.0188-1.2957 1.2648-2.3861 1.2648-3.4777 0-1.2004-1.4137-2.1852-1.4137-3.3536 0-1.1685 1.519-1.8655 1.519-3.1192 0-1.2532-.7543-1.9639-.7543-3.244 0-1.1396.3997-1.8907 1.09-2.7186-.1537.0797-.281.1705-.4102.285-.7318.6446-1.2052 1.6537-1.2052 2.651 0 1.3612.6586 1.9722.6586 3.0342 0 1.0628-1.5485 1.9007-1.5485 3.1112 0 1.2096 1.342 2.2392 1.342 3.2636 0 .9183-1.1556 2.1423-1.1944 3.2604a11.8754 11.8754 0 01-.693-.383c.0872-1.0176 1.1776-1.8303 1.1776-2.8542 0-.3754-.1753-.687-.323-.9364.4486 1.4145-1.2156 2.25-1.3652 3.4693a12.1204 12.1204 0 01-.8796-.6446c.1305-.2257.331-.5034.5586-.6575a7.9134 7.9134 0 01-.3077-.391c-.2677.1633-.5066.4659-.6594.7043a12.2459 12.2459 0 01-.707-.6754c.21-.2633.4813-.6635.8779-.7715a9.0433 9.0433 0 01-.2613-.473c-.4606.1213-.7755.5574-1.0092.8167a12.141 12.141 0 01-.6038-.7462c.3493-.229.6382-.8027 1.2688-.8267.0529.1312.1085.2617.1669.3909.068.1493.1705.2073.3601.2073.5858 0 1.4934-.3798 2.1908-1.076-.4537-.826-.5914-1.2465-.5914-1.677 0-1.094 1.5526-2.0124 1.5526-3.074 0-1.0615-.535-1.6686-.535-2.8186 0-1.0364.4682-1.9311 1.078-2.6858a2.2175 2.2175 0 00-.4114.331c-.6638.6722-1.104 1.655-1.104 2.5613 0 1.2212.4586 1.7226.4586 2.6285 0 .834-1.7679 1.9936-1.5678 3.1324-.617.5618-1.3529.8127-1.9967.8127a9.305 9.305 0 00.1949.6994c-.7251.0385-1.0568.6567-1.4398.8612a12.0872 12.0872 0 01-.5302-.8768c.6455-.0672.84-.897 1.7419-.8339a9.1275 9.1275 0 01-.1185-.665c-1.038-.0696-1.2732.8059-1.9555.8431a12.04 12.04 0 01-.3965-.948l2.27-.8659-.0048-.2805c0-.1696.0052-.3377.0144-.5041-1.1688-.0273-1.5246.976-2.5345.8767a12.106 12.106 0 01-.241-.9708c1.2766.158 1.7395-.9151 2.888-.9143a8.7482 8.7482 0 01.2024-.9036c-1.392-.0604-1.8779 1.1505-3.2364.9252a11.7352 11.7352 0 01-.076-.8527c1.5794.1764 2.1716-1.122 3.6097-.9632a8.4303 8.4303 0 01.471-.9963c-1.803-.317-2.4153 1.1908-4.0935.9591C.1813 5.2805 5.4844.0898 12 .0898S23.8187 5.2805 24 11.753c-1.6786.2317-2.2908-1.2757-4.0935-.9591.1773.32.335.6526.471.9963 1.4373-.1592 2.0295 1.1396 3.6093.9632z" />
  </svg>
);

// 17. Target Bullseye
export const TargetLogo: React.FC<LogoProps> = ({ className = 'w-5 h-5', ...props }) => (
  <svg role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <title>Target</title>
    <path d="M12.0005 0C18.627 0 24 5.373 24 12.0005 24 18.627 18.627 24 11.9995 24 5.373 24 0 18.627 0 11.9995 0 5.373 5.373 0 12.0005 0zm0 19.826a7.8265 7.8265 0 10-.001-15.652C7.7133 4.2246 4.2653 7.7136 4.2653 12c0 4.2864 3.448 7.7754 7.7342 7.826h.001zm0-3.9853a3.8402 3.8402 0 110-7.6803c2.1204.0006 3.839 1.7197 3.839 3.8401s-1.7186 3.8396-3.839 3.8402z" />
  </svg>
);

// 18. Amazon Smile
export const AmazonLogo: React.FC<LogoProps> = ({ className = 'w-5 h-5', ...props }) => (
  <svg role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <title>Amazon</title>
    <path d="M13.9 14.5c-3.1 2.3-7.5 3.5-11.4 1.4-.4-.2-.8.2-.5.6 2.3 2.8 6.4 4 10.4 2.8 1.9-.6 3.6-1.7 4.8-3.1.4-.5-.1-1.1-.6-.8l-2.7-.9zm8.5 2.1c-.2-.3-.9-.1-1.4.1-.9.3-1.9.5-2.8.5-.4 0-.6.4-.3.7.8 1 2.3 1.6 3.6 1.4.3 0 .5-.3.4-.6l-.5-2.1zM11.4 3C7.3 3 4 5.8 4 9.2c0 2.2 1.4 4.1 3.5 5.1.4.2.8 0 .8-.4V12c0-.3-.2-.6-.5-.7-1.3-.7-2-2-2-3.4C5.8 6.6 8.3 5 11.4 5c3.2 0 5.6 1.6 5.6 3.9 0 1.4-.7 2.6-1.9 3.3-.3.2-.5.5-.5.8v1.9c0 .4.4.6.8.4 2.2-1 3.6-3 3.6-5.4C19 5.8 15.6 3 11.4 3z" />
  </svg>
);

// 19. Sephora S-Flame
export const SephoraLogo: React.FC<LogoProps> = ({ className = 'w-5 h-5', ...props }) => (
  <svg role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <title>Sephora</title>
    <path d="M12 2C9.5 5 7 8.5 7 12.5c0 4 3 6.5 5 9.5 2-3 5-5.5 5-9.5C17 8.5 14.5 5 12 2zm0 4.2c1.7 2.3 3.2 4.6 3.2 7.3 0 2.6-1.7 4.2-3.2 6.5-1.5-2.3-3.2-3.9-3.2-6.5 0-2.7 1.5-5 3.2-7.3z" />
  </svg>
);

// 20. Apple
export const AppleLogo: React.FC<LogoProps> = ({ className = 'w-5 h-5', ...props }) => (
  <svg role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <title>Apple</title>
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.61-.75 1.04-1.8 0.92-2.87-.93.04-2.02.63-2.67 1.38-.58.65-1.08 1.71-.94 2.74 1.05.08 2.08-.53 2.69-1.25z" />
  </svg>
);

// 21. Uber
export const UberLogo: React.FC<LogoProps> = ({ className = 'w-5 h-5', ...props }) => (
  <svg role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <title>Uber</title>
    <path d="M0 7.97v4.958c0 1.867 1.302 3.101 3 3.101.826 0 1.562-.316 2.094-.87v.736H6.27V7.97H5.082v4.888c0 1.257-.85 2.106-1.947 2.106-1.11 0-1.946-.827-1.946-2.106V7.971H0zm7.44 0v7.925h1.13v-.725c.521.532 1.257.86 2.06.86a3.006 3.006 0 0 0 3.034-3.01 3.01 3.01 0 0 0-3.033-3.024 2.86 2.86 0 0 0-2.049.861V7.971H7.439zm9.869 2.038c-1.687 0-2.965 1.37-2.965 3 0 1.72 1.334 3.01 3.066 3.01 1.053 0 1.913-.463 2.49-1.233l-.826-.611c-.43.577-.996.847-1.664.847-.973 0-1.753-.7-1.912-1.64h4.697v-.373c0-1.72-1.222-3-2.886-3zm6.295.068c-.634 0-1.098.294-1.381.758v-.713h-1.131v5.774h1.142V12.61c0-.894.544-1.47 1.291-1.47H24v-1.065h-.396zm-6.319.928c.85 0 1.564.588 1.756 1.47H15.52c.203-.882.916-1.47 1.765-1.47zm-6.732.012c1.086 0 1.98.883 1.98 2.004a1.993 1.993 0 0 1-1.98 2.001A1.989 1.989 0 0 1 8.56 13.02a1.99 1.99 0 0 1 1.992-2.004z" />
  </svg>
);

// 22. Airbnb
export const AirbnbLogo: React.FC<LogoProps> = ({ className = 'w-5 h-5', ...props }) => (
  <svg role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <title>Airbnb</title>
    <path d="M12.001 18.275c-1.353-1.697-2.148-3.184-2.413-4.457-.263-1.027-.16-1.848.291-2.465.477-.71 1.188-1.056 2.121-1.056s1.643.345 2.12 1.063c.446.61.558 1.432.286 2.465-.291 1.298-1.085 2.785-2.412 4.458zm9.601 1.14c-.185 1.246-1.034 2.28-2.2 2.783-2.253.98-4.483-.583-6.392-2.704 3.157-3.951 3.74-7.028 2.385-9.018-.795-1.14-1.933-1.695-3.394-1.695-2.944 0-4.563 2.49-3.927 5.382.37 1.565 1.352 3.343 2.917 5.332-.98 1.085-1.91 1.856-2.732 2.333-.636.344-1.245.558-1.828.609-2.679.399-4.778-2.2-3.825-4.88.132-.345.395-.98.845-1.961l.025-.053c1.464-3.178 3.242-6.79 5.285-10.795l.053-.132.58-1.116c.45-.822.635-1.19 1.351-1.643.346-.21.77-.315 1.246-.315.954 0 1.698.558 2.016 1.007.158.239.345.557.582.953l.558 1.089.08.159c2.041 4.004 3.821 7.608 5.279 10.794l.026.025.533 1.22.318.764c.243.613.294 1.222.213 1.858zm1.22-2.39c-.186-.583-.505-1.271-.9-2.094v-.03c-1.889-4.006-3.642-7.608-5.307-10.844l-.111-.163C15.317 1.461 14.468 0 12.001 0c-2.44 0-3.476 1.695-4.535 3.898l-.081.16c-1.669 3.236-3.421 6.843-5.303 10.847v.053l-.559 1.22c-.21.504-.317.768-.345.847C-.172 20.74 2.611 24 5.98 24c.027 0 .132 0 .265-.027h.372c1.75-.213 3.554-1.325 5.384-3.317 1.829 1.989 3.635 3.104 5.382 3.317h.372c.133.027.239.027.265.027 3.37.003 6.152-3.261 4.802-6.975z" />
  </svg>
);

// 23. Chipotle Pepper Medallion
export const ChipotleLogo: React.FC<LogoProps> = ({ className = 'w-5 h-5', ...props }) => (
  <svg role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <title>Chipotle</title>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.8 15.6c-.6.3-1.3.4-2 .2-.8-.2-1.4-.7-1.8-1.4-.5-.9-.5-2 .1-2.9.4-.6 1.1-1 1.8-1.1.2 0 .4 0 .6.1.4.1.7.3 1 .6.4.4.6.9.7 1.4.2 1.2-.4 2.5-1.4 3.1zM14.5 9c-.3.4-.8.7-1.3.8-.4.1-.8 0-1.1-.2-.4-.2-.7-.6-.8-1-.2-.6 0-1.2.4-1.6.4-.4.9-.6 1.4-.5.4.1.8.3 1.1.6.3.5.4 1.3.3 1.9z" />
  </svg>
);

// 24. Dunkin'
export const DunkinLogo: React.FC<LogoProps> = ({ className = 'w-5 h-5', ...props }) => (
  <svg role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <title>Dunkin</title>
    <path d="M3 5h14v10c0 3.3-2.7 6-6 6H7c-3.3 0-6-2.7-6-6V5h2zm14 2h2c1.7 0 3 1.3 3 3s-1.3 3-3 3h-2V7zm-7 1c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3z" />
  </svg>
);

// 25. Wyndham Rewards
export const WyndhamLogo: React.FC<LogoProps> = ({ className = 'w-5 h-5', ...props }) => (
  <svg role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <title>Wyndham Rewards</title>
    <path d="M2.5 4h3.2l3.4 9.8L12.5 4h3l3.4 9.8L22.3 4h3.2L20.8 20h-3.4l-3.4-9.6L10.6 20H7.2L2.5 4z" />
  </svg>
);

export const DominosLogo: React.FC<LogoProps> = ({ className = 'w-5 h-5', ...props }) => (
  <svg role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <title>Domino's Pizza</title>
    <path d="M17.848 0 7.828 10.02l6.152 6.152 10.02-10.02L17.848 0zm-1.879 3.971a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4zm4.243 4.243a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4zM6.152 11.697 0 17.848l6.152 6.152 6.152-6.152-6.152-6.151zm0 4.243a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4z" />
  </svg>
);

export const TacoBellLogo: React.FC<LogoProps> = ({ className = 'w-5 h-5', ...props }) => (
  <svg role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <title>Taco Bell</title>
    <path d="M12.012 0C7.29 0 3.393 3.652 3.03 8.307L.004 22.012a.602.602 0 0 0 .588.73h7.684a4.485 4.485 0 0 0 7.472 0h7.662a.601.601 0 0 0 .588-.73l-3.008-13.7C20.627 3.653 16.733 0 12.012 0zm0 1.996c3.678 0 6.725 2.825 7.02 6.467l2.455 11.182H17.2a4.492 4.492 0 0 0-1.443-2.186 5.568 5.568 0 0 0-7.514 0A4.493 4.493 0 0 0 6.8 19.645H2.513L4.968 8.463c.295-3.642 3.342-6.467 7.044-6.467z" />
  </svg>
);

export const SonyLogo: React.FC<LogoProps> = ({ className = 'w-5 h-5', ...props }) => (
  <svg role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <title>Sony</title>
    <path d="M0 8.847h4.892c1.782 0 2.871.936 2.871 2.378 0 1.545-1.188 2.327-2.673 2.475l2.97 3.92H5.882L3.168 13.9H2.079v3.72H0V8.847zm2.079 3.525h2.574c.693 0 1.089-.356 1.089-.95 0-.574-.396-.911-1.089-.911H2.079v1.861zM9.504 8.847h2.079v8.773H9.504V8.847zm5.544 0h2.079l3.564 5.98V8.847h2.079v8.773h-2.079l-3.564-5.98v5.98h-2.079V8.847z" />
  </svg>
);

export const DysonLogo: React.FC<LogoProps> = ({ className = 'w-5 h-5', ...props }) => (
  <svg role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <title>Dyson</title>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
  </svg>
);

// Universal Smart BrandIcon component that resolves logos by program name or code
export interface BrandIconProps extends LogoProps {
  name?: string;
  code?: string;
}

export const BrandIcon: React.FC<BrandIconProps> = ({ name = '', code = '', className = 'w-5 h-5', ...props }) => {
  const query = `${name} ${code}`.toLowerCase().replace(/[^a-z0-9]/g, '');

  if (query.includes('delta') || query.includes('skymiles') || query === 'dl' || query === 'dal') {
    return <DeltaLogo className={className} {...props} />;
  }
  if (query.includes('united') || query.includes('mileageplus') || query === 'ua') {
    return <UnitedLogo className={className} {...props} />;
  }
  if (query.includes('americanair') || query.includes('aadvantage') || query === 'aa') {
    return <AmericanLogo className={className} {...props} />;
  }
  if (query.includes('southwest') || query.includes('rapidrewards') || query === 'sw' || query === 'wn') {
    return <SouthwestLogo className={className} {...props} />;
  }
  if (query.includes('virgin') || query.includes('flyingclub') || query === 'vs') {
    return <VirginLogo className={className} {...props} />;
  }
  if (query.includes('britishair') || query.includes('avios') || query === 'ba') {
    return <BritishAirwaysLogo className={className} {...props} />;
  }
  if (query.includes('airfrance') || query.includes('klm') || query.includes('flyingblue') || query === 'af') {
    return <AirFranceLogo className={className} {...props} />;
  }
  if (query.includes('chase') || query.includes('sapphire') || query.includes('freedom') || query.includes('ultimaterewards') || query === 'ch') {
    return <ChaseLogo className={className} {...props} />;
  }
  if (query.includes('americanexpress') || query.includes('amex') || query.includes('membershiprewards') || query === 'ax') {
    return <AmexLogo className={className} {...props} />;
  }
  if (query.includes('capitalone') || query.includes('venture') || query === 'c1') {
    return <CapitalOneLogo className={className} {...props} />;
  }
  if (query.includes('citi') || query.includes('thankyou') || query === 'ty') {
    return <CitiLogo className={className} {...props} />;
  }
  if (query.includes('marriott') || query.includes('bonvoy') || query === 'mb') {
    return <MarriottLogo className={className} {...props} />;
  }
  if (query.includes('hyatt') || query.includes('worldofhyatt') || query === 'hy') {
    return <HyattLogo className={className} {...props} />;
  }
  if (query.includes('hilton') || query.includes('honors') || query === 'hh') {
    return <HiltonLogo className={className} {...props} />;
  }
  if (query.includes('ihg') || query.includes('onerewards') || query === 'ih') {
    return <IHGLogo className={className} {...props} />;
  }
  if (query.includes('wyndham') || query === 'wyn') {
    return <WyndhamLogo className={className} {...props} />;
  }
  if (query.includes('starbucks') || query.includes('stars') || query === 'sb' || query === 'sbux') {
    return <StarbucksLogo className={className} {...props} />;
  }
  if (query.includes('target') || query.includes('circle') || query === 'tg' || query === 'tgt') {
    return <TargetLogo className={className} {...props} />;
  }
  if (query.includes('amazon') || query.includes('prime') || query === 'az' || query === 'amz') {
    return <AmazonLogo className={className} {...props} />;
  }
  if (query.includes('sephora') || query.includes('beautyinsider') || query === 'sp') {
    return <SephoraLogo className={className} {...props} />;
  }
  if (query.includes('apple') || query.includes('applecard') || query.includes('itunes') || query === 'ap') {
    return <AppleLogo className={className} {...props} />;
  }
  if (query.includes('uber') || query.includes('ubereats') || query === 'ub') {
    return <UberLogo className={className} {...props} />;
  }
  if (query.includes('airbnb')) {
    return <AirbnbLogo className={className} {...props} />;
  }

  if (query.includes('domino') || query.includes('pizza') || query === 'dp') {
    return <DominosLogo className={className} {...props} />;
  }
  if (query.includes('tacobell') || query.includes('taco') || query === 'tb') {
    return <TacoBellLogo className={className} {...props} />;
  }
  if (query.includes('chipotle') || query === 'cp') {
    return <ChipotleLogo className={className} {...props} />;
  }
  if (query.includes('dunkin') || query === 'dk') {
    return <DunkinLogo className={className} {...props} />;
  }
  if (query.includes('sony')) {
    return <SonyLogo className={className} {...props} />;
  }
  if (query.includes('dyson')) {
    return <DysonLogo className={className} {...props} />;
  }

  // Graceful fallback showing clean first letter or 2 letters
  const fallbackText = (code || name.slice(0, 2)).toUpperCase();
  return (
    <span className="font-black text-xs tracking-wider inline-block">
      {fallbackText}
    </span>
  );
};

export const PremierPartnerLogosStrip: React.FC<{ className?: string; itemClassName?: string }> = ({
  className = '',
  itemClassName = 'bg-secondary/50 hover:bg-secondary border border-border/60 text-muted-foreground',
}) => {
  const partners = [
    { name: 'Delta Air Lines', code: 'DL' },
    { name: 'United Airlines', code: 'UA' },
    { name: 'American Airlines', code: 'AA' },
    { name: 'Chase Ultimate Rewards', code: 'CH' },
    { name: 'American Express MR', code: 'AX' },
    { name: 'Capital One Miles', code: 'C1' },
    { name: 'Marriott Bonvoy', code: 'MB' },
    { name: 'World of Hyatt', code: 'HY' },
    { name: 'Starbucks Rewards', code: 'SB' },
    { name: 'Target Circle', code: 'TG' },
    { name: 'Amazon Prime', code: 'AZ' },
    { name: 'Apple', code: 'AP' },
  ];

  return (
    <div className={`flex flex-wrap items-center gap-2 sm:gap-2.5 ${className}`}>
      {partners.map((brand, idx) => (
        <div
          key={idx}
          className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg transition-colors text-xs ${itemClassName}`}
          title={brand.name}
        >
          <BrandIcon name={brand.name} code={brand.code} className="w-3.5 h-3.5 shrink-0 text-primary" />
          <span className="text-2xs font-semibold">{brand.name}</span>
        </div>
      ))}
    </div>
  );
};



