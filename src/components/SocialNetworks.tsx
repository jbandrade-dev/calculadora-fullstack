import Link from "next/link";
import { FacebookLogo, InstagramLogo } from "phosphor-react";
import { SocialNetworksProps } from "./constType";


export function SocialNetworks({ tailwind, size }: SocialNetworksProps) {
  return (
    <ul className={tailwind}>
      <li className="flex items-center">
        <Link target="_blank" rel="noreferrer" href="">
          <FacebookLogo size={size} weight="fill" />
        </Link>
      </li>

      <li className="flex items-center ml-0.5">
        <Link target="_blank" rel="noreferrer" href="">
          <InstagramLogo size={size} weight="fill" />
        </Link>
      </li>
    </ul>

  )
}