//프로젝트에서 사용할 색깔을 관리
const colors={
    white : "#fff",
    black : "#000",
    grey_0 : "#A9A9A9",
    grey_1 :"#808080",
    red:"#DB7093",
    blue:"#4169E1"
}

export const theme ={
    // 배경색
    background : colors.white,
    // 글자색
    text : colors.black,
    // 이미지 관력
    imageBackground :colors.grey_0,
    imageButtonBackground : colors.grey_0,
    imageButtonIcon : colors.white,
    
    // input 관련
    label:colors.grey_1,
    inputPlaceholder:colors.grey_1,
    inputBorder :colors.grey_1,
    errorMessage:colors.red,
    inputDisabledBackground:colors.grey_0,
    
    // 버튼관련
    buttonBackground:colors.blue,
    buttonTitle : colors.white,
    buttonUnFiledTitle : colors.blue,
    headerTintColor : colors.black,
    buttonLogout:colors.red,

    //Spinner
    spinnerBackground: colors.black,
    spinnerIndicator : colors.white,

    //Tab style
    tabActiveColor : colors.blue,
    tabInActiveColor : colors.grey_1,

    //List
    listTime : colors.grey_1,
    listDescription : colors.grey_1,
    listIcon :colors.black,

}