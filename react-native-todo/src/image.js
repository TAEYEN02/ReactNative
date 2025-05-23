//리액트 네이티브에서 제공하는 Image 컴포넌트는 프로젝트에
//이미지 파일의 경로나 URL을 이용하요 원격에 있는
//이미지를 랜더링 할 수 있다.
import check_box_outline from './assets/icons/check_box_outline.png';
import check_box from './assets/icons/check_box.png';
import delete_foreverr from './assets/icons/delete_forever.png';
import edit from './assets/icons/edit.png';

export const images = {
  uncompleted: check_box_outline,
  completed: check_box,
  delete: delete_foreverr,
  update: edit, 
};