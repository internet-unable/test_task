(function() {
    const commentsList = document.querySelector('.comments-list');
    const textArea = document.querySelector('.publish-comment__textarea');
    const publishCommentBtn = document.querySelector('.publish-comment__btn');

    function publishComment() {
        const textAreaValue = textArea.value;
        const commentTemplate = 
        `<div class="comments">
            <div class="profile">
                <img src="assets/img/anonymous.jpg  ">
            </div>

            <div class="comment-content">
                <p class="name">Anonymous</p>
                <p>${textAreaValue}</p>
            </div>
            <div class="clr"></div>

            <div class="comment-status">
                <span>
                    <font style="vertical-align: inherit;">
                        <font style="vertical-align: inherit;">Curte·comente</font>
                    </font>
                    <img src="assets/img/3.jpg" width="15px" height="15px">
                    <font style="vertical-align: inherit;">
                        <font style="vertical-align: inherit;">29</font>
                    </font>
                </span>

                <font style="vertical-align: inherit;">
                    <small>
                        <font style="vertical-align: inherit;">·</font>
                    </small>
                    <small>
                        <u>
                            <font style="vertical-align: inherit;">4 minutos antes</font>
                        </u>
                    </small>
                </font>
                
                <small>
                    <font style="vertical-align: inherit;"></font>
                    <u>
                        <font style="vertical-align: inherit;"></font>
                    </u>
                </small>
            </div>
        </div>`;

        commentsList.insertAdjacentHTML('afterbegin', commentTemplate);
    }

    publishCommentBtn.addEventListener('click', publishComment);
})();