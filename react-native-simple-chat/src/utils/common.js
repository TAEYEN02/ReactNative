//올바른 이메일 형식인지 확인하는 함수
//입력된 문자열에서 공백을 모두 제거하는 함수

export const validateEmail = email => {
    const regex = /^[0-9?A-z]+(\.)?[0-9?A-z]+@[0-9?A-z]+\.[A-z]{2}.?[A-z]{0,3}$/;
    return regex.test(email);
}

export const validatePassword = password => {
    const regex = /^(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z0-9!@#$%^&*(),.?":{}|<>]{8,16}$/;
    return regex.test(password);
}

// /s\/ : 공백 문자 하나를 의미
// g -> global , 문자열 전체를 대상으로 전역 검색을 하겠다.
export const removeWhitespce = text => {
    const regex = /\s/g; //문자열 전체에서 공백을 찾는다
    return text.replace(regex, '');
    //text 문자열에서 정규식에 해당하는 부분을 빈 문자열로 바꿔서 공백을 제거하겠다.
}

