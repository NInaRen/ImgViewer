1.html�ļ�����������js��css
<script src="/path/to/jquery.js"></script><!-- jQuery is required -->

<script src="/path/js/viewer.js"></script>
<script src="/path/js/viewer-switch.js"></script>

<link  href="/path/css/viewer.css" rel="stylesheet">

2.body��

<!-- a block container is required -->
<div>
    <div id="viewer-image"></div>
</div>

3.js����
$("#viewer-image").ImgViewer({
	    id: "viewer-image",//�󶨵�id
	    imgList:["img/tibet-1.jpg","img/tibet-2.jpg","img/tibet-3.jpg"],//Ҫչʾ��ͼƬsrc����
            height: "200px",//ImgViewer�ĸ߶ȣ�Ĭ��200px,֧�ְٷֱ�
            width: "200px",//ImgViewer�Ŀ�ȣ�Ĭ��200px��֧�ְٷֱ�
	    initIndex: 0,//��һ��Ĭ����ʾ��ͼƬindex
            z-index: 2018// ������ͼչʾ��z-index��Ĭ��2018
    });
