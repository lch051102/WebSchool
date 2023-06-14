function btc(e){
    var sc= document.getElementById(e.getAttribute('id')).getAttribute('id');
    var img = document.querySelector('img[src="덕영 맵.png"]');
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

            img.src = '학교지도_'+sc+'.jpg';
            img.style.width = '1150px'; // 이미지 크기 조절
            img.style.height = '800px';
            img.style.top = '100%'; // 이미지 위치 조정
            img.style.left = '50%';
            img.style.transform = 'translate(-50%, 10%)'; // 중앙 정렬
          
            // 이미지를 다시 보이도록 합니다.
            img.style.display = 'block';

            imageContainer.appendChild(img);
    
}