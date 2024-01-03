<div class="side-menu-content">
    @if($getRecommendedPost->count() > 0)
        <section class="popular-news-section">
            <div class="section-heading border-0 mb-2">
                <div class="row align-items-center">
                    <div class="col-12 section-heading-left">
                        <h2 class="text-black mb-0 w-200px custom-label-laptop">{{ __('messages.details.recommended_post') }}</h2>
                    </div>
                </div>
            </div>
            <div class="popular-news-post">
                <div class="row">
                    <div class="col-lg-12 d-flex flex-wrap justify-content-between">
                        @foreach($getRecommendedPost as $recommendedPost)
                            <div class="col-lg-12 col-sm-6 card d-flex flex-xl-row py-2 pe-lg-0 pe-md-4 pe-sm-3">
                                <div class="row">
                                    <div class="col-xl-4 col-5 card-top">
                                        <div class="card-img-top">
                                            <a href="{{route('detailPage',$recommendedPost->slug)}}">
                                                {{--                                            <img data-src="{{ $recommendedPost['post_image'] }}" alt="" src="{{ asset('front_web/images/bg-process.png') }}" class="w-100 h-100 w-300px lazy">--}}
                                                @if($recommendedPost['post_types'] == \App\Models\Post::AUDIO_TYPE_ACTIVE)
                                                    <button class="common-music-icon sidebar-music-icon"
                                                            type="button">
                                                        <i class="icon fa-solid fa-music text-white"></i>
                                                    </button>
                                                    <img src="{{ $recommendedPost['post_image'] }}" alt=""
                                                         class="w-100 h-100 w-300px">
                                                @elseif($recommendedPost['post_types'] == \App\Models\Post::VIDEO_TYPE_ACTIVE)
                                                    @php
                                                        $thumbUrl = !empty($recommendedPost->postVideo) && !empty($recommendedPost->postVideo->thumbnail_image_url) ? $recommendedPost->postVideo->thumbnail_image_url : null;
                                                        $thumbImage = !empty($recommendedPost->postVideo) && !empty($recommendedPost->postVideo->uploaded_thumb) ? $recommendedPost->postVideo->uploaded_thumb : asset('front_web/images/default.jpg')
                                                    @endphp
                                                    <button class="common-music-icon sidebar-music-icon"
                                                            type="button">
                                                        <i class="icon fa-solid fa-play text-white"></i>
                                                    </button>
                                                    <img src="{{ (!empty($thumbUrl) ? $thumbUrl : $thumbImage)  }}" alt=""
                                                         class="w-100 h-100 w-300px">
                                                @else
                                                    <img src="{{ $recommendedPost['post_image'] }}" alt=""
                                                         class="w-100 h-100 w-300px">
                                                @endif
                                            </a>
                                        </div>
                                    </div>
                                    <div class="col-xl-8 col-7">
                                        <div class="card-body">
                                            <h5 class="card-title mb-1 fs-12 text-gray fw-7">{!! $recommendedPost['category']['name'] !!}
                                            </h5>
                                            <p class="card-title mb-0 fs-14 text-black fw-6">
                                                <a href="{{route('detailPage',$recommendedPost->slug)}}" class="text-black">
                                                    {!! $recommendedPost['title'] !!}
                                                </a>
                                            </p>
                                            <span class="card-text fs-12 text-gray">{{ $recommendedPost['created_at']->format('F d, Y') }}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            @if($loop->iteration >= 6)
                                @break
                            @endif

                        @endforeach
                        @if(checkAdSpaced('recommended_post_index_page'))
                            @if(isset(getAdImageDesktop(\App\Models\AdSpaces::INDEX_RECOMMENDED_POST)->code))
                                <div class="index-top-desktop ad-space-url-desktop">
                                    {!! getAdImageDesktop(\App\Models\AdSpaces::INDEX_RECOMMENDED_POST)->code !!}
                                </div>
                            @elseif ($adsDesktop = getAdImageDesktop(\App\Models\AdSpaces::INDEX_RECOMMENDED_POST))
                                <div class="index-top-desktop mt-3">
                                    <a href="{{$adsDesktop->ad_url}}"
                                       target="_blank">
                                        <img src="{{asset($adsDesktop->ad_banner)}}"
                                             width="800" class="img-fluid">
                                    </a>
                                </div>
                            @endif
                            @if(isset(getAdImageDesktop(\App\Models\AdSpaces::INDEX_RECOMMENDED_POST)->code))
                                <div class="index-top-mobile ad-space-url-mobile">
                                    {!! getAdImageDesktop(\App\Models\AdSpaces::INDEX_RECOMMENDED_POST)->code !!}
                                </div>
                            @elseif ($adRecord = getAdImageMobile(\App\Models\AdSpaces::INDEX_RECOMMENDED_POST))
                                <div class="index-top-mobile mt-3">
                                    <a href="{{$adRecord->ad_url}}"
                                       target="_blank">
                                        <img src="{{asset($adRecord->ad_banner)}}"
                                             width="350" class="img-fluid">
                                    </a>
                                </div>
                            @endif
                        @endif

                    </div>
                </div>
            </div>
        </section>
    @endif
</div>
