import React from "react";
import "./Info.css";

export default function Info() {
    return (
        <div className="Inf">
            <a>

                <svg className="img_info" viewBox="0 0 134 164" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M123.261 47.3184L122.11 49.1418L124.015 50.1522C134.661 55.8002 134.659 70.1657 124.026 75.8304L122.119 76.846L123.279 78.6688C129.425 88.333 121.806 101.098 109.478 100.866L107.414 100.827L107.44 102.891C107.504 107.836 104.87 112.57 100.255 115.401L98.4096 116.532L99.6834 118.282C100.108 118.866 100.533 119.449 100.957 120.031C108.3 130.107 115.494 139.98 120.477 150.55C115.121 147.812 109.453 145.184 103.589 142.63C102.975 142.355 102.319 142.397 101.804 142.612C101.253 142.842 100.594 143.413 100.477 144.329C99.5141 149.048 98.3699 153.821 96.9315 158.697C91.7546 147.516 84.2189 137.201 76.8347 127.094C76.0481 126.017 75.2632 124.942 74.483 123.87L73.6242 122.688L72.2377 123.147C66.6962 124.979 61.2948 123.779 57.1813 120.757L55.5512 119.56L54.3723 121.204C52.932 123.211 51.4654 125.222 49.9925 127.242C42.6435 137.319 35.1407 147.607 29.9979 158.729C28.5619 153.842 27.4256 149.056 26.4372 144.316C26.3287 143.524 25.8047 142.913 25.1618 142.628C24.5489 142.357 23.9193 142.404 23.4361 142.585L23.3864 142.604L23.3378 142.625C17.4819 145.186 11.8054 147.82 6.43805 150.565C11.3202 140.106 18.4051 130.372 25.6367 120.436C26.8235 118.806 28.0143 117.17 29.1999 115.524L33.5985 116.475L29.9302 112.029C27.7225 109.354 26.5374 106.122 26.5693 102.887L26.5891 100.867H24.5694C11.7247 100.867 4.74002 88.1573 10.7446 78.6719L11.8983 76.8494L9.99393 75.8364C5.07031 73.2175 2 68.3348 2 62.9812C2 57.6366 5.07784 52.759 10.0131 50.1464L11.9173 49.1383L10.7705 47.3143C4.61723 37.5274 12.1938 24.9738 24.5404 25.1178L26.5918 25.1418L26.5635 23.0904C26.4095 11.9248 39.6465 4.18868 50.4902 10.2619L52.1779 11.2071L53.1789 9.55191C55.9474 4.97416 61.1657 2 66.9879 2C72.8337 2 78.0615 4.98145 80.8265 9.56811L81.829 11.2312L83.5209 10.2781C94.3362 4.18563 107.598 11.9074 107.443 23.0904L107.415 25.145L109.47 25.1178C121.778 24.9551 129.408 37.573 123.261 47.3184ZM120.413 75.6988L120.514 75.6779L120.612 75.6467C133.434 71.5695 133.381 54.3028 120.51 50.3152L119.931 50.1356C119.857 49.9285 119.803 49.7495 119.773 49.5798C119.737 49.3735 119.747 49.2393 119.772 49.1472C119.792 49.0733 119.844 48.9367 120.049 48.7439L120.089 48.706L120.127 48.6659C124.595 43.9742 124.513 37.7899 121.716 33.2128C118.925 28.6455 113.387 25.5643 106.887 26.8334L106.774 26.8555L106.664 26.8904L106.096 27.0711C105.876 26.8791 105.701 26.7137 105.556 26.5434C105.39 26.3472 105.323 26.2092 105.297 26.1187C105.278 26.0549 105.258 25.9479 105.322 25.7379L105.348 25.6551L105.366 25.5703C106.567 19.9783 103.729 14.2045 98.587 11.3901L98.5867 11.39C93.3844 8.54355 86.8892 9.16991 82.369 12.9681L82.1574 13.1229C81.7833 13.345 81.4661 13.3454 81.075 13.242C80.8804 13.1905 80.6838 13.1156 80.4591 13.0192L80.3811 12.7104L80.3564 12.6128L80.3221 12.5181C78.3337 7.03863 72.9542 3.44829 66.9879 3.44829C61.1048 3.44829 55.7873 6.95591 53.7463 12.3248L53.6775 12.5057L53.6446 12.6965L53.6076 12.9119L53.0193 13.1934C52.6392 13.3345 52.2077 13.2989 51.8446 13.0871L51.6401 12.9392C46.649 8.7689 40.3032 8.80332 35.5498 11.3421C30.7789 13.8903 27.3702 19.1139 28.6002 25.3587L28.657 25.647L28.7943 25.9068L28.8818 26.0723C28.7521 26.2369 28.6247 26.3826 28.4898 26.5099C28.1352 26.8447 27.8238 26.9931 27.274 26.8654L27.247 26.8592L27.2199 26.8536C20.7725 25.544 15.1715 28.5756 12.3369 33.1402C9.48435 37.7339 9.40191 43.9619 13.9908 48.7746L13.993 48.7769L14.3336 49.133C14.3073 49.322 14.2749 49.4839 14.2278 49.6307C14.168 49.8167 14.0966 49.9377 14.0181 50.0233C13.9491 50.0986 13.8138 50.2148 13.5137 50.3111C7.76746 52.0948 3.79504 57.1391 3.79504 62.9811C3.79504 68.7571 7.65724 73.76 13.2629 75.6034L13.4224 75.6558L13.5883 75.6809L13.958 75.7369L14.2286 76.3096C14.313 76.563 14.2733 76.8872 14.0309 77.1745C9.48379 81.9447 9.46609 88.1355 12.2517 92.7438C15.0307 97.3414 20.601 100.396 27.1241 99.1575L27.2382 99.1358L27.3491 99.1011L27.9125 98.9245L28.5315 99.5C28.7194 99.7269 28.7607 99.991 28.6871 100.231L28.6629 100.31L28.6453 100.39C27.7613 104.438 28.9757 108.686 31.8402 111.803L31.8411 111.804C37.321 117.76 46.2407 117.612 51.6683 113.061C52.1095 112.722 52.5913 112.669 52.991 112.809C52.9914 112.809 52.9918 112.809 52.9921 112.809L53.5434 113.002L53.6239 113.334L53.6499 113.442L53.6875 113.545C55.8509 119.508 61.4619 122.473 66.9093 122.513C72.3701 122.552 78.0302 119.656 80.2889 113.568L80.3363 113.44L80.366 113.307L80.4361 112.992C80.6633 112.9 80.8753 112.825 81.0859 112.775C81.5571 112.663 81.9003 112.691 82.2665 112.969C87.2021 117.142 93.5811 117.195 98.3796 114.704C103.207 112.199 106.658 106.98 105.407 100.603L105.35 100.314L105.213 100.054L105.129 99.8943C105.257 99.7332 105.382 99.5916 105.515 99.468C105.86 99.1454 106.168 98.995 106.728 99.1257L106.76 99.1332L106.793 99.1397C113.34 100.44 118.927 97.3771 121.729 92.7839C124.533 88.1867 124.568 81.9848 120.051 77.2526C119.839 77.0079 119.784 76.841 119.765 76.7534C119.743 76.6533 119.741 76.5279 119.784 76.3439C119.822 76.1805 119.885 76.0067 119.979 75.7892L120.413 75.6988Z"
                        fill="#BB0B32" stroke="black" stroke-width="4"/>
                    <path
                        d="M94.604 58.8868L94.6141 58.8773C95.1986 58.3276 95.4663 57.4729 95.2073 56.6437C94.9586 55.8473 94.2919 55.2993 93.5271 55.1553L93.4723 55.1449L93.417 55.1377L76.4514 52.9145L68.8385 38.6252C68.049 37.0166 65.7177 37.0163 64.9363 38.6408L57.4686 53.0425L40.5759 55.4402L40.5615 55.4422L40.5471 55.4445C39.8089 55.5603 39.0662 56.0659 38.7922 56.9433C38.55 57.7191 38.7785 58.4659 39.1764 58.9658L39.2782 59.0937L39.3995 59.2033L51.66 70.2939L48.8872 86.0111C48.6844 87.0751 49.3007 87.8514 49.7944 88.1917C50.2685 88.5185 51.0995 88.7857 51.9651 88.3787L51.9889 88.3676L52.0124 88.3558L67.1493 80.7485L82.3705 88.1755L82.4552 88.2169L82.5435 88.2501C83.1039 88.4608 83.8748 88.4836 84.558 88.025C85.334 87.504 85.6156 86.6165 85.4777 85.8383L85.4757 85.8269L85.4735 85.8157L82.503 70.1098L94.604 58.8868ZM76.8996 53.7558L76.8984 53.7535C76.8991 53.7547 76.8997 53.7559 76.9003 53.7571L76.8996 53.7558ZM52.823 86.7255L52.8254 86.7116C52.8241 86.7197 52.8226 86.7277 52.8212 86.7358L52.823 86.7255ZM68.5104 40.4375C68.5087 40.441 68.5069 40.4444 68.5051 40.4478L68.5073 40.4435L68.5104 40.4375ZM28.2246 63.005C28.2246 43.0574 45.4654 26.6763 66.9925 26.6763C88.5216 26.6763 105.789 43.0592 105.789 63.005C105.789 82.9507 88.5216 99.3337 66.9925 99.3337C45.4654 99.3337 28.2246 82.9525 28.2246 63.005Z"
                        fill="#BB0B32" stroke="black" stroke-width="4"/>

                </svg>


                <div className="text_info">

                    <div className="info">

                        Качество <br/> <br/>

                    </div>

                    У нас только лучшее <br/> оборудование для <br/>ваших <br/>потребностей
                </div>

            </a>

            <a>

                <svg className="img_info" viewBox="0 0 110 157" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M50.9832 127.863L50.969 127.847L50.9545 127.831L15.3613 88.464L15.3612 88.4638C-5.76155 65.1064 -1.27868 28.8509 24.846 11.202L24.8462 11.2019C43.0018 -1.06656 66.9942 -1.06729 85.1506 11.1997C111.286 29.0221 115.757 65.1119 94.6388 88.4638L94.6387 88.464L59.0455 127.831L59.031 127.847L59.0168 127.863C56.8771 130.335 53.1229 130.335 50.9832 127.863Z"
                        fill="#BB0B32" stroke="black" stroke-width="4"/>
                    <path
                        d="M83.0638 53.6627C83.0638 68.8304 70.5333 81.1878 54.9997 81.1878C39.466 81.1878 26.9355 68.8304 26.9355 53.6627C26.9355 38.495 39.466 26.1377 54.9997 26.1377C70.5333 26.1377 83.0638 38.495 83.0638 53.6627Z"
                        fill="white" stroke="black" stroke-width="4"/>
                    <path
                        d="M88.938 148.346C88.938 148.36 88.8648 148.986 87.1243 149.977C85.5398 150.879 83.1142 151.758 79.9436 152.521C73.6337 154.04 64.8136 155 54.9993 155C45.1849 155 36.3648 154.04 30.055 152.521C26.8843 151.758 24.4587 150.879 22.8743 149.977C21.1338 148.986 21.0605 148.36 21.0605 148.346C21.0605 148.332 21.1338 147.707 22.8743 146.716C24.4587 145.814 26.8843 144.935 30.055 144.171C36.3648 142.652 45.1849 141.692 54.9993 141.692C64.8136 141.692 73.6337 142.652 79.9436 144.171C83.1142 144.935 85.5398 145.814 87.1243 146.716C88.8648 147.707 88.938 148.332 88.938 148.346Z"
                        fill="#BB0B32" stroke="black" stroke-width="4"/>
                </svg>

                <div
                    className="text_info">

                    <div className="info">
                        Местоположение <br/> <br/>
                    </div>

                    Наш офис располагается по <br/>адресу: <br/> г. Благовещенск, ул. <br/>Тенистая, 127Б
                </div>
            </a>


            <a>

                <svg className="img_info" viewBox="0 0 169 163" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M23.5645 32.1987L48.1204 56.1132C53.0364 60.9008 51.5516 68.7793 45.5323 71.7491L7.42374 34.636C10.4382 28.6654 18.7043 27.4655 23.5645 32.1987Z"
                        fill="white" fill-opacity="0.7" stroke="#1E1E1E" stroke-width="0.5"/>
                    <path
                        d="M133.354 139.121L133.355 139.122C138.208 143.814 136.949 151.893 130.804 154.794L92.6981 117.683C93.2037 116.753 93.7703 115.902 94.4849 115.206C98.2374 111.552 104.666 111.182 108.798 115.206L133.354 139.121Z"
                        fill="white" fill-opacity="0.7" stroke="#1E1E1E" stroke-width="0.5"/>
                    <path
                        d="M92.16 118.788L92.1603 118.788L92.1644 118.775C92.2327 118.553 92.3477 118.352 92.4777 118.132L130.35 155.016C117.963 160.535 102.204 160.551 85.8056 155.582C69.263 150.569 52.0903 140.488 37.116 125.904C22.1416 111.321 11.7914 94.6068 6.64492 78.5033C1.54197 62.5362 1.56018 47.1894 7.23019 35.1113L45.0888 71.9468C45.0505 71.9668 45.0126 71.9869 44.9751 72.0066C44.9556 72.017 44.9362 72.0272 44.917 72.0373C44.7533 72.1235 44.5958 72.2039 44.4329 72.2675C42.9093 72.8331 41.5982 73.6478 40.5395 74.6789C36.6017 78.5138 36.1973 85.0877 40.5395 89.3164L74.7043 122.589C80.2046 127.946 89.5334 125.893 92.16 118.788Z"
                        fill="black" stroke="#1E1E1E" stroke-width="0.5"/>
                    <g opacity="0.1">
                        <mask id="path-4-inside-1_732_64" fill="white">
                            <path
                                d="M92.5655 117.869L92.4232 117.73C92.3876 117.8 92.352 117.869 92.3164 117.938C92.3876 117.904 92.4588 117.869 92.5655 117.869Z"/>
                        </mask>
                        <path
                            d="M92.5655 117.869L92.4232 117.73C92.3876 117.8 92.352 117.869 92.3164 117.938C92.3876 117.904 92.4588 117.869 92.5655 117.869Z"
                            fill="#717171"/>
                        <path
                            d="M92.5655 117.869V118.369H93.7957L92.9144 117.511L92.5655 117.869ZM92.4232 117.73L92.772 117.372L92.2873 116.9L91.9784 117.502L92.4232 117.73ZM92.3164 117.938L91.8716 117.71L91.1863 119.045L92.5353 118.388L92.3164 117.938ZM92.9144 117.511L92.772 117.372L92.0743 118.089L92.2167 118.227L92.9144 117.511ZM91.9784 117.502C91.9691 117.52 91.981 117.497 91.9717 117.515C91.9705 117.517 91.9721 117.514 91.9709 117.517C91.9533 117.551 91.9875 117.484 91.97 117.518C91.9575 117.543 91.9817 117.496 91.9692 117.52C91.958 117.542 91.9795 117.5 91.9684 117.522C91.9683 117.522 91.9682 117.522 91.9681 117.522C91.9681 117.522 91.968 117.522 91.9679 117.522C91.9632 117.532 91.9722 117.514 91.9675 117.523C91.9675 117.523 91.9674 117.523 91.9673 117.524C91.9672 117.524 91.9672 117.524 91.9671 117.524C91.967 117.524 91.967 117.524 91.9669 117.524C91.9668 117.525 91.9668 117.525 91.9667 117.525C91.9615 117.535 91.9711 117.516 91.9659 117.526C91.9656 117.527 91.9653 117.528 91.965 117.528C91.9649 117.528 91.9585 117.541 91.9583 117.541C91.9485 117.56 91.9649 117.528 91.955 117.548C91.9513 117.555 91.9571 117.544 91.9533 117.551C91.9518 117.554 91.954 117.55 91.9525 117.552C91.9524 117.553 91.9524 117.553 91.9523 117.553C91.9522 117.553 91.9522 117.553 91.9521 117.553C91.9501 117.557 91.9536 117.55 91.9517 117.554C91.9496 117.558 91.9504 117.557 91.9483 117.561C91.9478 117.562 91.9472 117.563 91.9467 117.564C91.9427 117.572 91.949 117.559 91.945 117.567C91.9413 117.574 91.9471 117.563 91.9433 117.57C91.9363 117.584 91.9487 117.56 91.9417 117.574C91.9386 117.58 91.9444 117.568 91.9412 117.574C91.9412 117.575 91.9411 117.575 91.941 117.575C91.941 117.575 91.9409 117.575 91.9408 117.575C91.9408 117.575 91.9407 117.575 91.9406 117.576C91.9406 117.576 91.9405 117.576 91.9404 117.576C91.9404 117.576 91.94 117.577 91.94 117.577C91.9364 117.584 91.9432 117.571 91.9396 117.578C91.9395 117.578 91.9394 117.578 91.9394 117.578C91.9393 117.578 91.9392 117.578 91.9392 117.578C91.9352 117.586 91.9423 117.572 91.9383 117.58C91.9273 117.601 91.9485 117.56 91.9375 117.582C91.9331 117.59 91.941 117.575 91.9367 117.583C91.9362 117.584 91.9363 117.584 91.9358 117.585C91.9327 117.591 91.9385 117.58 91.9354 117.586C91.9256 117.605 91.9448 117.567 91.935 117.587C91.9298 117.597 91.9386 117.58 91.9333 117.59C91.919 117.618 91.946 117.565 91.9317 117.593C91.927 117.602 91.9358 117.585 91.9312 117.594C91.9312 117.594 91.9311 117.594 91.931 117.594C91.931 117.594 91.9309 117.595 91.9308 117.595C91.9308 117.595 91.9307 117.595 91.9306 117.595C91.9305 117.595 91.9305 117.595 91.9304 117.596C91.9289 117.598 91.9314 117.593 91.93 117.596C91.9281 117.6 91.931 117.594 91.9292 117.598C91.9229 117.61 91.935 117.587 91.9287 117.599C91.9287 117.599 91.9286 117.599 91.9285 117.599C91.9285 117.599 91.9284 117.599 91.9283 117.6C91.9173 117.621 91.9377 117.581 91.9267 117.603C91.9231 117.61 91.9298 117.597 91.9262 117.604C91.9262 117.604 91.9261 117.604 91.926 117.604C91.926 117.604 91.9259 117.604 91.9258 117.604C91.9257 117.605 91.9257 117.605 91.9256 117.605C91.9255 117.605 91.9255 117.605 91.9254 117.605C91.9253 117.605 91.9253 117.606 91.9252 117.606C91.9251 117.606 91.9251 117.606 91.925 117.606C91.9136 117.628 91.9359 117.585 91.9246 117.607C91.9237 117.609 91.925 117.606 91.9242 117.608C91.9241 117.608 91.924 117.608 91.9239 117.608C91.9239 117.608 91.9238 117.608 91.9237 117.609C91.9221 117.612 91.925 117.606 91.9233 117.609C91.9121 117.631 91.9341 117.588 91.9229 117.61C91.9218 117.612 91.9236 117.609 91.9225 117.611C91.9224 117.611 91.9223 117.611 91.9223 117.611C91.9222 117.611 91.9221 117.612 91.9221 117.612C91.922 117.612 91.9219 117.612 91.9219 117.612C91.9218 117.612 91.9217 117.612 91.9216 117.613C91.919 117.618 91.9235 117.609 91.9208 117.614C91.9207 117.614 91.9207 117.614 91.9206 117.615C91.9205 117.615 91.9205 117.615 91.9204 117.615C91.9183 117.619 91.9221 117.612 91.92 117.616C91.9199 117.616 91.9198 117.616 91.9198 117.616C91.9197 117.616 91.9196 117.616 91.9196 117.617C91.9195 117.617 91.9194 117.617 91.9194 117.617C91.9193 117.617 91.9192 117.617 91.9191 117.617C91.9133 117.629 91.9246 117.607 91.9187 117.618C91.9187 117.618 91.9186 117.619 91.9185 117.619C91.9185 117.619 91.9184 117.619 91.9183 117.619C91.9109 117.633 91.924 117.608 91.9166 117.622C91.9166 117.622 91.9165 117.623 91.9164 117.623C91.9164 117.623 91.9163 117.623 91.9162 117.623C91.9162 117.623 91.9161 117.623 91.916 117.624C91.9159 117.624 91.9159 117.624 91.9158 117.624C91.9157 117.624 91.9157 117.624 91.9156 117.624C91.9155 117.624 91.9155 117.625 91.9154 117.625C91.9115 117.632 91.9189 117.618 91.915 117.626C91.9101 117.635 91.9182 117.619 91.9133 117.629C91.9107 117.634 91.9142 117.627 91.9116 117.632C91.9084 117.638 91.9016 117.652 91.8983 117.658C91.8877 117.679 91.9056 117.644 91.895 117.665C91.8891 117.676 91.8992 117.656 91.8933 117.668C91.8932 117.668 91.8932 117.668 91.8931 117.668C91.893 117.668 91.8929 117.668 91.8929 117.669C91.8928 117.669 91.8927 117.669 91.8927 117.669C91.8926 117.669 91.8925 117.669 91.8925 117.669C91.8842 117.685 91.8999 117.655 91.8916 117.671C91.874 117.705 91.9059 117.643 91.8883 117.678C91.87 117.713 91.9049 117.645 91.8866 117.681C91.8845 117.685 91.8883 117.677 91.8862 117.682C91.8861 117.682 91.8861 117.682 91.886 117.682C91.8859 117.682 91.8859 117.682 91.8858 117.682C91.8849 117.684 91.8862 117.682 91.8854 117.683C91.8836 117.687 91.8867 117.681 91.8849 117.684C91.882 117.69 91.8863 117.681 91.8833 117.687C91.8773 117.699 91.8876 117.679 91.8816 117.691C91.8673 117.719 91.8926 117.669 91.8783 117.697C91.8782 117.697 91.8781 117.697 91.8781 117.697C91.878 117.698 91.8779 117.698 91.8779 117.698C91.8778 117.698 91.8777 117.698 91.8777 117.698C91.8776 117.698 91.8775 117.699 91.8774 117.699C91.8628 117.727 91.8913 117.672 91.8766 117.7C91.865 117.723 91.8874 117.679 91.8758 117.702C91.8642 117.725 91.8865 117.681 91.8749 117.704C91.8643 117.724 91.8822 117.689 91.8716 117.71L92.7612 118.167C92.7613 118.167 92.7613 118.167 92.7614 118.166C92.7615 118.166 92.7616 118.166 92.7616 118.166C92.7617 118.166 92.7618 118.166 92.7618 118.166C92.7619 118.165 92.762 118.165 92.762 118.165C92.7642 118.161 92.7603 118.169 92.7625 118.164C92.7625 118.164 92.7626 118.164 92.7627 118.164C92.7627 118.164 92.7628 118.164 92.7629 118.164C92.7669 118.156 92.7605 118.168 92.7645 118.16C92.7721 118.146 92.7603 118.168 92.7679 118.154C92.768 118.154 92.768 118.154 92.7681 118.153C92.7682 118.153 92.7682 118.153 92.7683 118.153C92.7684 118.153 92.7684 118.153 92.7685 118.153C92.7686 118.152 92.7686 118.152 92.7687 118.152C92.7717 118.146 92.7666 118.156 92.7695 118.151C92.7696 118.15 92.7697 118.15 92.7698 118.15C92.7698 118.15 92.7699 118.15 92.77 118.15C92.7719 118.146 92.7684 118.153 92.7704 118.149C92.7848 118.121 92.7568 118.175 92.7712 118.147C92.7805 118.129 92.7628 118.164 92.7721 118.146C92.7746 118.141 92.7699 118.15 92.7725 118.145C92.7725 118.145 92.7726 118.145 92.7727 118.144C92.7727 118.144 92.7728 118.144 92.7729 118.144C92.7828 118.125 92.7646 118.16 92.7746 118.141C92.792 118.107 92.7637 118.162 92.7812 118.128C92.7813 118.128 92.7814 118.128 92.7814 118.127C92.7815 118.127 92.7816 118.127 92.7816 118.127C92.7896 118.112 92.7741 118.142 92.7821 118.126C92.7826 118.125 92.7823 118.126 92.7829 118.125C92.7841 118.122 92.7833 118.124 92.7846 118.121C92.7861 118.118 92.7863 118.118 92.7879 118.115C92.7955 118.1 92.787 118.117 92.7946 118.102C92.8071 118.077 92.7887 118.113 92.8012 118.089C92.8013 118.089 92.8014 118.089 92.8015 118.088C92.8015 118.088 92.8016 118.088 92.8017 118.088C92.8097 118.072 92.7941 118.103 92.8021 118.087C92.8069 118.078 92.7976 118.096 92.8025 118.086C92.8026 118.086 92.8026 118.086 92.8027 118.086C92.8028 118.086 92.8028 118.086 92.8029 118.086C92.803 118.085 92.8031 118.085 92.8031 118.085C92.8032 118.085 92.8033 118.085 92.8033 118.085C92.8061 118.079 92.801 118.089 92.8037 118.084C92.8044 118.083 92.8039 118.084 92.8046 118.082C92.8135 118.065 92.7973 118.096 92.8062 118.079C92.8206 118.051 92.7936 118.104 92.8079 118.076C92.8133 118.065 92.803 118.085 92.8083 118.075C92.8084 118.075 92.8085 118.075 92.8085 118.075C92.8086 118.074 92.8087 118.074 92.8088 118.074C92.8088 118.074 92.8089 118.074 92.809 118.074C92.809 118.074 92.8091 118.074 92.8092 118.073C92.8101 118.072 92.8087 118.074 92.8096 118.073C92.8115 118.069 92.8085 118.075 92.8104 118.071C92.8183 118.055 92.8029 118.086 92.8108 118.07C92.8117 118.068 92.8104 118.071 92.8113 118.069C92.8275 118.038 92.7967 118.098 92.8129 118.066C92.821 118.05 92.8053 118.081 92.8133 118.065C92.8134 118.065 92.8135 118.065 92.8135 118.065C92.8136 118.065 92.8137 118.065 92.8138 118.064C92.8138 118.064 92.8139 118.064 92.814 118.064C92.814 118.064 92.8141 118.064 92.8142 118.064C92.8142 118.063 92.8143 118.063 92.8144 118.063C92.8144 118.063 92.8145 118.063 92.8146 118.063C92.826 118.041 92.8036 118.084 92.815 118.062C92.8176 118.057 92.8129 118.066 92.8154 118.061C92.8155 118.061 92.8156 118.061 92.8156 118.061C92.8157 118.061 92.8158 118.061 92.8158 118.06C92.8159 118.06 92.816 118.06 92.816 118.06C92.8161 118.06 92.8162 118.06 92.8163 118.06C92.8287 118.035 92.8046 118.082 92.8171 118.058C92.8172 118.058 92.8172 118.058 92.8173 118.058C92.8174 118.057 92.8174 118.057 92.8175 118.057C92.8176 118.057 92.8178 118.056 92.8179 118.056C92.8347 118.024 92.8016 118.088 92.8183 118.055C92.8184 118.055 92.8185 118.055 92.8186 118.055C92.8186 118.055 92.8187 118.055 92.8188 118.055C92.8188 118.055 92.8189 118.054 92.819 118.054C92.819 118.054 92.8191 118.054 92.8192 118.054C92.8192 118.054 92.8193 118.054 92.8194 118.053C92.8195 118.053 92.8195 118.053 92.8196 118.053C92.8203 118.052 92.8206 118.051 92.8213 118.05C92.8361 118.021 92.8098 118.072 92.8246 118.043C92.8315 118.03 92.821 118.05 92.8279 118.037C92.8476 117.999 92.8216 118.049 92.8413 118.011C92.8413 118.011 92.8414 118.011 92.8415 118.01C92.8416 118.01 92.8416 118.01 92.8417 118.01C92.8457 118.002 92.8381 118.017 92.8421 118.009C92.8422 118.009 92.8423 118.009 92.8423 118.009C92.8424 118.009 92.8425 118.009 92.8425 118.008C92.8495 117.995 92.836 118.021 92.8429 118.008C92.8606 117.973 92.8269 118.039 92.8446 118.004C92.8572 117.98 92.8337 118.026 92.8463 118.001C92.8527 117.989 92.8416 118.01 92.848 117.998C92.852 117.99 92.8506 117.993 92.8546 117.985C92.8645 117.966 92.8464 118.001 92.8563 117.982C92.8671 117.96 92.8471 117.999 92.858 117.978C92.8628 117.969 92.8564 117.981 92.8613 117.972C92.8728 117.949 92.8514 117.991 92.863 117.969C92.8748 117.946 92.852 117.99 92.8638 117.967C92.8639 117.967 92.8639 117.967 92.864 117.967C92.8641 117.966 92.8641 117.966 92.8642 117.966C92.8696 117.956 92.8593 117.976 92.8646 117.965C92.8808 117.934 92.8501 117.994 92.8663 117.962C92.8664 117.962 92.8664 117.962 92.8665 117.962C92.8666 117.962 92.8666 117.961 92.8667 117.961C92.8668 117.961 92.8669 117.961 92.8669 117.961C92.867 117.961 92.8671 117.961 92.8671 117.96C92.8714 117.952 92.8633 117.968 92.8676 117.96C92.8676 117.96 92.8677 117.959 92.8678 117.959C92.8678 117.959 92.8679 117.959 92.868 117.959L91.9784 117.502ZM92.5353 118.388C92.5445 118.383 92.5514 118.38 92.5579 118.377C92.5642 118.374 92.5689 118.372 92.5727 118.37C92.5802 118.367 92.5826 118.366 92.582 118.366C92.581 118.367 92.5779 118.368 92.5736 118.368C92.5692 118.369 92.5663 118.369 92.5655 118.369V117.369C92.3345 117.369 92.1731 117.452 92.0975 117.489L92.5353 118.388Z"
                            fill="#1E1E1E" mask="url(#path-4-inside-1_732_64)"/>
                        <mask id="path-6-inside-2_732_64" fill="white">
                            <path
                                d="M45.5182 72.0503L45.3759 71.9116C45.3403 71.9809 45.3403 72.0849 45.3047 72.1542C45.3759 72.1196 45.447 72.0849 45.5182 72.0503Z"/>
                        </mask>
                        <path
                            d="M45.5182 72.0503L45.3759 71.9116C45.3403 71.9809 45.3403 72.0849 45.3047 72.1542C45.3759 72.1196 45.447 72.0849 45.5182 72.0503Z"
                            fill="#717171"/>
                        <path
                            d="M45.5182 72.0503L45.7371 72.4998L46.3767 72.1884L45.8671 71.692L45.5182 72.0503ZM45.3759 71.9116L45.7247 71.5534L45.24 71.0814L44.9311 71.6833L45.3759 71.9116ZM45.3047 72.1542L44.8599 71.9259L44.1746 73.2606L45.5236 72.6038L45.3047 72.1542ZM45.8671 71.692L45.7247 71.5534L45.027 72.2698L45.1694 72.4085L45.8671 71.692ZM44.9311 71.6833C44.9001 71.7436 44.8825 71.8 44.872 71.8386C44.8618 71.8766 44.8543 71.9136 44.8505 71.9323C44.8454 71.9569 44.844 71.9632 44.8431 71.9664C44.8424 71.969 44.8467 71.9516 44.8599 71.9259L45.7495 72.3826C45.7805 72.3222 45.7981 72.2659 45.8085 72.2273C45.8188 72.1893 45.8262 72.1523 45.8301 72.1335C45.8351 72.1089 45.8366 72.1026 45.8374 72.0995C45.8381 72.0969 45.8339 72.1143 45.8207 72.14L44.9311 71.6833ZM45.5236 72.6038C45.5592 72.5864 45.5948 72.5691 45.6304 72.5518C45.6659 72.5344 45.7015 72.5171 45.7371 72.4998L45.2993 71.6007C45.2637 71.618 45.2281 71.6354 45.1926 71.6527C45.157 71.67 45.1214 71.6874 45.0858 71.7047L45.5236 72.6038Z"
                            fill="#1E1E1E" mask="url(#path-6-inside-2_732_64)"/>
                    </g>
                    <path
                        d="M145.487 15.6606V3.18668L165.982 23.147L145.487 43.141V30.6678V30.4178H145.237H77.4062V15.9106H145.237H145.487V15.6606Z"
                        fill="#BB0B32" stroke="#1E1E1E" stroke-width="0.5"/>
                    <path
                        d="M87.4769 80.9925V93.4664L66.9812 73.5061L87.4769 53.5121V65.9853V66.2353H87.7269H155.522V80.7425H87.7269H87.4769V80.9925Z"
                        fill="#BB0B32" stroke="#1E1E1E" stroke-width="0.5"/>
                    <path
                        d="M56.5443 141.922L56.5443 141.922L56.5453 141.92C57.2167 140.893 58.7718 140.542 59.8684 141.233C60.4207 141.581 60.8041 142.114 60.9314 142.702C61.0594 143.327 60.9321 143.951 60.5773 144.486C60.1248 145.146 59.3833 145.554 58.5425 145.554C58.1343 145.554 57.7234 145.451 57.3334 145.243V145.216L57.2167 145.142C56.6664 144.795 56.317 144.297 56.1892 143.708C56.0611 143.082 56.1888 142.457 56.5443 141.922Z"
                        fill="black" stroke="black" stroke-width="0.5"/>
                    <path
                        d="M110.787 113.261L110.788 113.262L135.415 137.211C137.852 139.584 139.228 142.747 139.228 146.151C139.228 150.31 137.11 154.126 133.721 156.396L133.697 156.412L133.685 156.438C133.546 156.744 133.374 157.043 133.102 157.309C132.588 157.809 131.937 158.043 131.285 158.043C131.054 158.043 130.855 157.979 130.64 157.909L130.605 157.897L130.57 157.912C124.142 160.61 116.896 162.028 109.007 162.028C94.543 161.994 78.7941 157.529 63.432 149.01C62.8474 148.675 62.4039 148.141 62.2337 147.511C62.0621 146.876 62.1317 146.176 62.4719 145.613L62.472 145.613L62.4737 145.61C63.1214 144.448 64.7675 144.011 65.9677 144.678L65.9679 144.679C80.3214 152.622 95.6053 157.03 108.971 157.03C115.245 157.03 120.951 156.057 126.122 154.251L126.275 154.198L126.159 154.085L93.24 122.026L93.1538 121.942L93.087 122.042C90.7325 125.567 86.7345 127.832 82.276 127.855L82.2303 127.744L82.0378 127.782V127.854C78.6491 127.829 75.4751 126.525 73.0975 124.175L73.0969 124.175L38.8966 90.9024C36.4601 88.5295 35.1189 85.3666 35.1189 82.0321C35.1189 78.6628 36.4602 75.4999 38.8966 73.1271C39.5679 72.4734 40.3095 71.8887 41.086 71.4075L41.1947 71.3401L41.1031 71.2509L8.21949 39.2262L8.10912 39.1187L8.05588 39.2633C6.20086 44.3008 5.23826 49.8927 5.23825 55.9339C5.2026 78.3236 17.747 103.857 38.7927 124.318C43.6362 129.035 48.836 133.405 54.2498 137.256L54.25 137.256C55.3794 138.056 55.6523 139.621 54.7974 140.753L54.7967 140.754C54.0115 141.818 52.3295 142.087 51.1982 141.286C45.6153 137.304 40.2098 132.767 35.1598 127.849C13.2153 106.477 0.135564 79.5717 0.1 55.934C0.10001 47.768 1.66314 40.3664 4.75181 33.8313C4.7724 33.7909 4.78305 33.7598 4.79202 33.7336L4.79227 33.7328C4.80093 33.7075 4.80791 33.6873 4.82221 33.6595L4.83325 33.638V33.6138V33.6018C6.88465 29.3173 11.3974 26.5395 16.2994 26.5395H16.3706C19.833 26.5395 23.1171 27.8468 25.5533 30.2537L25.5538 30.2542L50.1097 54.1688L50.1103 54.1693C52.5821 56.5422 53.9228 59.7045 53.8875 63.0033L53.8875 63.0051C53.9228 68.2979 50.4995 73.0781 45.3784 74.9017C44.2963 75.2532 43.3228 75.8504 42.4942 76.6573C41.0503 78.0286 40.2216 80.0305 40.2216 82.0321C40.2216 84.0696 41.0157 85.9324 42.5296 87.372C42.5299 87.3722 42.5301 87.3725 42.5303 87.3727L76.6942 120.644C78.1719 122.083 80.0475 122.856 82.1378 122.856C85.4875 122.856 88.3732 120.891 89.4916 117.869L89.4919 117.869C90.1273 116.115 91.151 114.534 92.4926 113.227C94.8934 110.889 98.2491 109.547 101.676 109.547C105.102 109.547 108.351 110.854 110.787 113.261ZM38.8268 90.974L73.0272 124.246H38.8624C17.8297 103.798 5.30266 78.2889 5.33825 55.934C5.33825 49.9445 6.28608 44.3995 8.112 39.4007L8.07995 39.3695L8.14972 39.2978L8.24356 39.3324C8.23843 39.3463 8.2333 39.3603 8.22818 39.3742L40.9595 71.2506C40.9666 71.2463 40.9736 71.2419 40.9806 71.2375L41.0333 71.3225L40.9636 71.3942L40.9461 71.3771C40.1949 71.8517 39.4779 72.4214 38.8268 73.0555C36.3713 75.4469 35.0189 78.6355 35.0189 82.0321C35.0189 85.394 36.3713 88.5826 38.8268 90.974ZM45.8392 68.8294L45.9035 68.8921L45.9727 68.8348C47.6668 67.4307 48.7492 65.3236 48.7492 63.0044C48.7492 61.0012 47.9549 59.1386 46.4769 57.6993L21.921 33.7848C20.4431 32.3455 18.4607 31.5383 16.3706 31.5383C13.9569 31.5383 11.8645 32.5562 10.4574 34.2429L10.398 34.314L10.4644 34.3786L45.8392 68.8294ZM131.073 151.837L131.136 151.898L131.205 151.844C132.937 150.474 133.983 148.401 134.019 146.118L134.019 146.114C133.983 144.044 133.19 142.147 131.711 140.707L107.156 116.793C107.156 116.793 107.156 116.793 107.156 116.793C105.677 115.318 103.766 114.546 101.676 114.546C99.5527 114.546 97.5717 115.351 96.1293 116.754C95.9901 116.864 95.8878 116.997 95.7906 117.124C95.7572 117.168 95.7244 117.21 95.6909 117.251L95.6325 117.322L95.6984 117.386L131.073 151.837Z"
                        fill="black" stroke="black" stroke-width="0.2"/>
                    <path
                        d="M142.567 13.1612H142.667V13.0612V2.59429C142.667 1.59687 143.281 0.696268 144.242 0.295121C145.201 -0.105108 146.333 0.128689 147.052 0.829016L168.156 21.3816C169.148 22.3475 169.148 23.9463 168.156 24.9122L168.156 24.9122L147.052 45.4995C147.052 45.4995 147.052 45.4995 147.052 45.4995C146.573 45.9665 145.922 46.2336 145.236 46.2336C144.893 46.2336 144.55 46.1667 144.244 46.0339L144.244 46.0338L144.24 46.0322C143.283 45.6662 142.667 44.7337 142.667 43.7342V33.2673V33.1673H142.567H77.1555C75.749 33.1673 74.5863 32.0312 74.5863 30.6679V15.6606C74.5863 14.2973 75.749 13.1612 77.1555 13.1612H142.567ZM147.805 37.4263V37.6633L147.975 37.498L162.637 23.2186L162.711 23.1469L162.637 23.0753L147.975 8.79588L147.805 8.63054V8.86752V15.6606C147.805 17.0239 146.642 18.16 145.236 18.16H79.8246H79.7246V18.26V28.0685V28.1685H79.8246H145.236C146.642 28.1685 147.805 29.3046 147.805 30.6679V37.4263Z"
                        fill="black" stroke="black" stroke-width="0.2"/>
                    <path
                        d="M90.259 63.3859V63.4859H90.359H155.77C157.212 63.4859 158.339 64.5874 158.339 65.9853V80.9926C158.339 82.3559 157.177 83.492 155.77 83.492H90.359H90.259V83.592V94.0589C90.259 95.0559 89.645 95.9562 88.6846 96.3576C88.3385 96.4923 88.0308 96.5583 87.6899 96.5583C87.0041 96.5583 86.353 96.2912 85.8735 95.8242L64.7696 75.2716C63.7778 74.3057 63.7778 72.7069 64.7696 71.741L64.7697 71.741L85.8718 51.1553C85.8721 51.1551 85.8724 51.1548 85.8727 51.1545C86.6289 50.4521 87.726 50.2202 88.6834 50.6198L88.6834 50.6199L88.6862 50.6209C89.6429 50.987 90.259 51.9195 90.259 52.919V63.3859ZM153.101 78.4932H153.201V78.3932V68.5847V68.4847H153.101H87.6899C86.2835 68.4847 85.1207 67.3486 85.1207 65.9853V59.2269V58.9899L84.951 59.1552L70.2886 73.4346L70.215 73.5063L70.2886 73.5779L84.951 87.8573L85.1207 88.0227V87.7857V80.9926C85.1207 79.6293 86.2835 78.4932 87.6899 78.4932H153.101Z"
                        fill="black" stroke="black" stroke-width="0.2"/>
                </svg>

                <div className="text_info">

                    <div className="info">
                        Наша поддержка <br/><br/>
                    </div>

                    Остались вопросы? <br/>
                    Обратитесь к нашим <br/> специалистам <br/>
                    8 (4162) 501-933 <br/>
                    podem-blag@mail.ru

                </div>
            </a>

        </div>

    );

}