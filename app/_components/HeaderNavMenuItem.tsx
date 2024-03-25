'use client';

import HeroIconWrapper from '@/app/_components/HeroiconWrapper';
import { useRouter } from 'next/navigation';
import {
  Divider,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from '@nextui-org/react';
import { useState } from 'react';
import { MagnifyingGlassIcon, XCircleIcon } from '@heroicons/react/24/solid';

interface Props {
  title: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  path: string;
}

export default function HeaderNavMenuItem({ title, icon, path }: Props) {
  const router = useRouter();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  function handleClick(e: React.MouseEvent) {
    e.preventDefault(); // 기본 이벤트 방지
    if (path === '/search') {
      console.log('Search link clicked');
      onOpen();
    } else {
      // 그 외의 경우에는 해당 경로로 이동
      router.push(path);
    }
  }
  const [searchValue, setSearchValue] = useState('');
  return (
    <>
      <Modal
        isOpen={isOpen}
        size="2xl"
        radius="sm"
        hideCloseButton
        className="h-4/5"
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="p-0">
                <Input
                  placeholder="Searching..."
                  value={searchValue}
                  onValueChange={setSearchValue}
                  radius="none"
                  className="bg-[#f5f5f5]"
                  startContent={
                    <HeroIconWrapper
                      IconComponent={MagnifyingGlassIcon}
                      iconProps={{
                        className: 'h-6 h-6 text-md cursor-pointer text-[#999]',
                      }}
                    />
                  }
                  endContent={
                    <div className="flex h-7 items-center space-x-3 text-small">
                      <Divider className="bg-gray-300" orientation="vertical" />
                      <HeroIconWrapper
                        IconComponent={XCircleIcon}
                        onPress={onClose}
                        iconProps={{
                          className:
                            'h-6 h-6 text-md cursor-pointer text-[#999]',
                        }}
                      />
                    </div>
                  }
                />
              </ModalHeader>

              <ModalBody className="flex items-center justify-center text-6xl opacity-30">
                <HeroIconWrapper
                  IconComponent={MagnifyingGlassIcon}
                  iconProps={{ className: 'h-20 h-20' }}
                />
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
      <button
        type="button"
        onClick={handleClick}
        className="flex flex-col items-center gap-y-2 text-neutral-600"
      >
        <HeroIconWrapper
          IconComponent={icon}
          iconProps={{ className: 'h-4 h-4' }}
        />
        <div className="text-xs">{title}</div>
      </button>
    </>
  );
}
