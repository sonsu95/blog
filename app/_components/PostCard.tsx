'use client';

import HeroIconWrapper from '@/app/_components/HeroiconWrapper';
import {
  CalendarIcon,
  ChatBubbleOvalLeftIcon,
  ChevronDoubleRightIcon,
  FolderIcon,
} from '@heroicons/react/24/outline';
import { Divider, Button } from '@nextui-org/react';

interface Post {
  id: number;
  title: string;
  date: string;
  category: string;
  comments: number;
}

export default function PostCard() {
  return (
    <div className="pb-10">
      <div className="text-matterhorn mb-16 flex flex-col items-center gap-y-4">
        <div className="text-2xl">오픈소스 컨트리뷰터의 팁</div>
        <div className="text-novel flex items-center gap-x-2">
          <div className="flex items-center gap-x-2">
            <HeroIconWrapper
              IconComponent={CalendarIcon}
              iconProps={{ className: 'h-3 h-3' }}
            />
            <span className="text-xs">Posted on 2024-03-27</span>
          </div>
          <Divider className="h-3" orientation="vertical" />
          <div className="flex items-center gap-x-2">
            <HeroIconWrapper
              IconComponent={FolderIcon}
              iconProps={{ className: 'h-3 h-3' }}
            />
            <span className="text-xs">In essay</span>
          </div>
          <Divider className="h-3" orientation="vertical" />
          <div className="flex items-center gap-x-2">
            <HeroIconWrapper
              IconComponent={ChatBubbleOvalLeftIcon}
              iconProps={{ className: 'h-3 h-3' }}
            />
            <span className="text-xs">Comments</span>
          </div>
        </div>
      </div>
      <div className="mb-12">
        <p>
          2년 전 나는 국비 지원교육을 받고 있었다. 쉬는 시간이면 블로터를 보거나
          궁금한 키워드들을 검색해보곤 했다. 어느 날 나는 스프링
          Dispatcher-Servlet의 개념은 알겠는데, 어떻게 구현되어 있는지 궁금했다.
          그래서 깃허브에서 spring-framework 프로젝트를 찾았고 분석하기
          시작했다. 이때 만약 코드 베이스 전체를 이해하는 천재 개발자면
          좋았겠지만, 난 지극히 평범한 사람이었기 때문에 하나도 이해하지 못했다.
          하지만 대충 어떤 식으로 작동하고, 어떻게 코드가 작성되어 있는지 볼 수
          있었다. 무엇보다 선지자들의 코드를 볼 수 있다는 건 공부하는 사람
          입장에서는 매우 매력적인 경험이었다. 이때부터 나는 오픈소스를 좋아하게
          됐다. 그리고 시간이 흘러 얼마 전 꾸준히 참여하고 있던 yorkie-team의
          메인테이너가 됐다. 언젠가는 메인테이너를 해보고 싶다는 생각은
          했었지만, 아직 부족한 내게 기회가 올 거라고는 생각도 못 했다. 현재는
          메인테이너 업무를 진행하면서 콜라보레이터 때와 또 다른 배움을 얻고
          있다.
        </p>
      </div>
      <div className="flex w-full justify-center">
        <Button
          variant="solid"
          className="h-8 w-32 bg-nero text-white"
          radius="none"
          endContent={
            <HeroIconWrapper
              IconComponent={ChevronDoubleRightIcon}
              iconProps={{ className: 'h-3 w-3' }}
            />
          }
        >
          Read More
        </Button>
      </div>
      <Divider className="mt-12" />
    </div>
  );
}
