1.html文件，引入以下js和css
<script src="/path/to/jquery.js"></script><!-- jQuery is required -->

<script src="/path/js/viewer.js"></script>
<script src="/path/js/viewer-switch.js"></script>

<link  href="/path/css/viewer.css" rel="stylesheet">

2.body中

<!-- a block container is required -->
<div>
    <div id="viewer-image"></div>
</div>

3.js代码
$("#viewer-image").ImgViewer({
	    id: "viewer-image",//绑定的id
	    imgList:["img/tibet-1.jpg","img/tibet-2.jpg","img/tibet-3.jpg"],//要展示的图片src数组
            height: "200px",//ImgViewer的高度，默认200px,支持百分比
            width: "200px",//ImgViewer的宽度，默认200px，支持百分比
	    initIndex: 0,//第一次默认显示的图片index
            z-index: 2018// 点击后大图展示的z-index：默认2018
    });
