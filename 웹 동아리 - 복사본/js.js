const toggleButton = document.getElementById('toggleButton'); // toggleButton 요소 선택
const list = document.getElementById('list'); // list 요소 선택

toggleButton.addEventListener('click', () => {
    if (list.style.display === 'none') {
        list.style.display = 'block';
        toggleButton.textContent = '리스트 접기';
    } else {
        list.style.display = 'none';
        toggleButton.textContent = '리스트 펼치기';
    }
});


        function searchImage() {
            var img = document.querySelector('img[src="https://dukyoung-h.goeyi.kr/images/web/dukyoung-h/sub/img0109.png"]');
            img.style.display = 'none';
            // 이전 이미지 삭제
            var previousImage = document.querySelector('#image-container img');
            if (previousImage) {
                previousImage.remove();
            }
        
            // 새로운 이미지 추가
            var searchValue = document.getElementById('search').value;
            var imageContainer = document.getElementById('image-container');
            var img = new Image();

            if (searchValue === '1층') {
                // 1층에 해당하는 이미지로 설정
                img.src = '좀 그린 지도 돌린거.png';
                img.style.width = '1150px'; // 이미지 크기 조절
                img.style.height = '800px';
                img.style.top = '50%'; // 이미지 위치 조정
                img.style.left = '50%';
                img.style.transform = 'translate(-50%, 10%)'; // 중앙 정렬
              
                // 이미지를 다시 보이도록 합니다.
                img.style.display = 'block';
              }
              else if (searchValue === '협력학습 1실' || searchValue === '협력 학습 1실' || searchValue === '협력학습1실' || searchValue === '영어1실' ||
                       searchValue === '협력학습 2실' || searchValue === '협력 학습 2실' || searchValue === '협력학습2실' || searchValue === '영어2실' ||
                       searchValue === '협력학습 3실' || searchValue === '협력 학습 3실' || searchValue === '협력학습3실' || searchValue === '영어3실' ||
                       searchValue === '협력학습 4실' || searchValue === '협력 학습 4실' || searchValue === '협력학습4실' || searchValue === '일본어실' ||
                       searchValue === '협력학습 5실' || searchValue === '협력 학습 5실' || searchValue === '협력학습5실' || searchValue === '중국어실' ||
                       searchValue === '창조관 1층') {
                // 창조관 1층에 해당하는 이미지로 설정
                img.src = '학교지도_창조관_1층.jpg';
                img.style.width = '1150px'; // 이미지 크기 조절
                img.style.height = '800px';
                img.style.top = '50%'; // 이미지 위치 조정
                img.style.left = '50%';
                img.style.transform = 'translate(-50%, 10%)'; // 중앙 정렬
              
                // 이미지를 다시 보이도록 합니다.
                img.style.display = 'block';
              }
              else if (searchValue === '경영회계부' || searchValue === '경영 회계부' || searchValue === '미래직업교육부' || searchValue === '미래직업 교육부' ||
                       searchValue === '교과 수업실' || searchValue === '교과수업실' || searchValue === '응용프로그래밍 개발 1실' || searchValue === '응용 프로그래밍 개발 1실' ||
                       searchValue === '응용프로그래밍개발 1실' || searchValue === '응용프로그래밍개발1실' || searchValue === '응용프로그래밍 개발 2실' ||
                       searchValue === '응용프로그래밍개발2실' || searchValue === '응용 프로그래밍 개발 2실' || searchValue === '응용프로그래밍개발 2실' ||
                       searchValue === '멀티미디어실' || searchValue === '멀티 미디어실' || searchValue === '사물인터넷 서비스기획실' || searchValue === '사물 인터넷 서비스기획실' ||
                       searchValue === '사물 인터넷 서비스 기획실' || searchValue === '사물인터넷서비스기획실' || searchValue === '창조관 2층') {
                // 창조관 2층에 해당하는 이미지로 설정
                img.src = '학교지도_창조관_2층.jpg';
                img.style.width = '1150px'; // 이미지 크기 조절
                img.style.height = '800px';
                img.style.top = '50%'; // 이미지 위치 조정
                img.style.left = '50%';
                img.style.transform = 'translate(-50%, 10%)'; // 중앙 정렬
              
                // 이미지를 다시 보이도록 합니다.
                img.style.display = 'block';
              }
              else if (searchValue === '소프트웨어부' || searchValue === '소프트 웨어부' || searchValue === '교과 수업실' || searchValue === '교과수업실' ||
                       searchValue === '컴퓨터보안 1실' || searchValue === '컴퓨터보안 2실' || searchValue === '컴퓨터 보안 1실' || searchValue === '컴퓨터 보안 2실' ||
                       searchValue === '사무행정실' || searchValue === '사무 행정실' || searchValue === '빅데이터분석실' || searchValue === '빅데이터 분석실' ||
                       searchValue === '3학년 10반' || searchValue === '3-10' || searchValue === '3학년 9반' || searchValue === '3-9' || searchValue === '3학년 8반' || 
                       searchValue === '3-8' || searchValue === '3학년 7반' || searchValue === '3-7' || searchValue === '창조관 3층') {
                // 창조관 3층에 해당하는 이미지로 설정
                img.src = '학교지도_창조관_3층.jpg';
                img.style.width = '1150px'; // 이미지 크기 조절
                img.style.height = '800px';
                img.style.top = '50%'; // 이미지 위치 조정
                img.style.left = '50%';
                img.style.transform = 'translate(-50%, 10%)'; // 중앙 정렬

                // 이미지를 다시 보이도록 합니다.
                img.style.display = 'block';
            } 
            else if (searchValue === '회계실무1실' || searchValue === '회계실무 1실' || searchValue === '회계실무2실' || searchValue === '회계실무 2실' ||
                     searchValue === '회계실무3실' || searchValue === '회계실무 3실' || searchValue === '세무실무실' || searchValue === '세무 실무실' ||
                     searchValue === '전자상거래실무실' || searchValue === '전자상거래 실무실' || searchValue === '창조관 4층') {
                // 창조관 4층에 해당하는 이미지로 설정
                img.src = '학교지도_창조관_4층.jpg';
                img.style.width = '1150px'; // 이미지 크기 조절
                img.style.height = '800px';
                img.style.top = '50%'; // 이미지 위치 조정
                img.style.left = '50%';
                img.style.transform = 'translate(-50%, 10%)'; // 중앙 정렬

                // 이미지를 다시 보이도록 합니다.
                img.style.display = 'block';
            }
            else if (searchValue === '빅데이터부' || searchValue === '교과 수업실' || searchValue === '교과수업실' || searchValue === '데이터베이스 1실' ||
                    searchValue === '데이터베이스1실' || searchValue === '데이터베이스 2실' || searchValue === '데이터베이스2실' || searchValue === '도제교육1실' ||
                    searchValue === '도제교육 1실' || searchValue === '도제교육2실' || searchValue === '도제교육 2실' || searchValue === '난타실' ||
                    searchValue === '창조관 5층') {
                // 창조관 5층에 해당하는 이미지로 설정
                img.src = '학교지도_창조관_5층.jpg';
                img.style.width = '1150px'; // 이미지 크기 조절
                img.style.height = '800px';
                img.style.top = '50%'; // 이미지 위치 조정
                img.style.left = '50%';
                img.style.transform = 'translate(-50%, 10%)'; // 중앙 정렬

                // 이미지를 다시 보이도록 합니다.
                img.style.display = 'block';
            }
            else if (searchValue === '음악실' || searchValue === '다목적회의실' || searchValue === '다목적 회의실' || searchValue === '북카페 도서관' ||
                    searchValue === '경영회계준비실' || searchValue === '경영회계 준비실' || searchValue === '경영 회계 준비실' ||
                    searchValue === '창조관 지하 1층') {
                // 창조관 지하 1층에 해당하는 이미지로 설정
                img.src = '학교지도_창조관_5층.jpg';
                img.style.width = '1150px'; // 이미지 크기 조절
                img.style.height = '800px';
                img.style.top = '50%'; // 이미지 위치 조정
                img.style.left = '50%';
                img.style.transform = 'translate(-50%, 10%)'; // 중앙 정렬

                // 이미지를 다시 보이도록 합니다.
                img.style.display = 'block';
            }
            else if (searchValue === '일시적 관찰실' || searchValue === '일시적관찰실' || searchValue === '위클래스' || searchValue === '위 클래스' ||
                    searchValue === '인쇄실' || searchValue === '교장실' || searchValue === '숙직실' || searchValue === '행정실' ||
                    searchValue === '법인실' || searchValue === '학부모회의실' || searchValue === '학부모 회의실' || searchValue === '교무실' ||
                    searchValue === '교무 기획실' || searchValue === '교무기획실' || searchValue === '교무 기획부' || searchValue === '연구기획부' ||
                    searchValue === '연구 기획부' || searchValue === '교육과정부' || searchValue === '교육 과정부' || searchValue === '환경 복지부') {
                // 비전관 1층에 해당하는 이미지로 설정
                img.src = '학교지도_비전관_1층.jpg';
                img.style.width = '1150px'; // 이미지 크기 조절
                img.style.height = '800px';
                img.style.top = '50%'; // 이미지 위치 조정
                img.style.left = '50%';
                img.style.transform = 'translate(-50%, 10%)'; // 중앙 정렬

                // 이미지를 다시 보이도록 합니다.
                img.style.display = 'block';
            }
            else if (searchValue === '2-10' || searchValue === '2학년 10반' || searchValue === '2학년10반' ||
                    searchValue === '2-9' || searchValue === '2학년 9반' || searchValue === '2학년9반' ||
                    searchValue === '2-8' || searchValue === '2학년 8반' || searchValue === '2학년8반' ||
                    searchValue === '2-7' || searchValue === '2학년 7반' || searchValue === '2학년7반' ||
                    searchValue === '2-6' || searchValue === '2학년 6반' || searchValue === '2학년6반' ||
                    searchValue === '2-5' || searchValue === '2학년 5반' || searchValue === '2학년5반' ||
                    searchValue === '2-4' || searchValue === '2학년 4반' || searchValue === '2학년4반' ||
                    searchValue === '2-3' || searchValue === '2학년 3반' || searchValue === '2학년3반' ||
                    searchValue === '2-2' || searchValue === '2학년 2반' || searchValue === '2학년2반') {
                // 비전관 2층에 해당하는 이미지로 설정
                img.src = '학교지도_비전관_2층.jpg';
                img.style.width = '1150px'; // 이미지 크기 조절
                img.style.height = '800px';
                img.style.top = '50%'; // 이미지 위치 조정
                img.style.left = '50%';
                img.style.transform = 'translate(-50%, 10%)'; // 중앙 정렬

                // 이미지를 다시 보이도록 합니다.
                img.style.display = 'block';
            }
            else if (searchValue === '3-6' || searchValue === '3학년 6반' || searchValue === '3학년6반' ||
                    searchValue === '3-5' || searchValue === '3학년 5반' || searchValue === '3학년5반' ||
                    searchValue === '3-4' || searchValue === '3학년 4반' || searchValue === '3학년4반' ||
                    searchValue === '3-3' || searchValue === '3학년 3반' || searchValue === '3학년3반' ||
                    searchValue === '3-2' || searchValue === '3학년 2반' || searchValue === '3학년2반' ||
                    searchValue === '3-1' || searchValue === '3학년 1반' || searchValue === '3학년1반' ||
                    searchValue === '2학년 부' || searchValue === '2학년부' || 
                    searchValue === '3학년 부' || searchValue === '3학년부' ||
                    searchValue === '진로진학부' || searchValue === '진로 진학부' || 
                    searchValue === '진로상담실' || searchValue === '진로 상담실' || 
                    searchValue === '교육 정보부' || searchValue === '교육정보부') {
                // 비전관 3층에 해당하는 이미지로 설정
                img.src = '학교지도_비전관_3층.jpg';
                img.style.width = '1150px'; // 이미지 크기 조절
                img.style.height = '800px';
                img.style.top = '50%'; // 이미지 위치 조정
                img.style.left = '50%';
                img.style.transform = 'translate(-50%, 10%)'; // 중앙 정렬

                // 이미지를 다시 보이도록 합니다.
                img.style.display = 'block';
            }
            else if (searchValue === '진로 체험 공간' || searchValue === '진로체험 공간' || searchValue === '진로 체험공간' ||
                    searchValue === '스페이스' || searchValue === '스페이스 엑스' || searchValue === 'Space-X' ||searchValue === '매점') {
                // 비전관 1층 지하에 해당하는 이미지로 설정
                img.src = '학교지도_비전관_지하1층.jpg';
                img.style.width = '1150px'; // 이미지 크기 조절
                img.style.height = '800px';
                img.style.top = '50%'; // 이미지 위치 조정
                img.style.left = '50%';
                img.style.transform = 'translate(-50%, 10%)'; // 중앙 정렬

                // 이미지를 다시 보이도록 합니다.
                img.style.display = 'block';
            }
            else {
                alert("검색어를 다시 입력해주세요.");
                return;
            }
        
            imageContainer.appendChild(img);

        }
        
