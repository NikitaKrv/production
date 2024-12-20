import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import cls from './Button.module.scss';

export enum ThemeButton {
	CLEAR = 'clear',
	CLEAR_INVERTED = 'clearInverted',
	OUTLINE = 'outline',
	BACKGROUND = 'background',
	BACKGROUND_INVERTED = 'backgroundInverted'
}

export enum ButtonSize {
	M = 'size_m',
	L = 'size_l',
	XL = 'size_xl'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string
	theme?: ThemeButton
	square?: boolean
	size?: ButtonSize
	disabled?: boolean
}

export const Button: FC<ButtonProps> = (
  {
    className, children, theme, square, size, disabled, ...props
  },
) => {
  const mods: Record<string, boolean> = {
    [cls.square]: square,
	  [cls[size]]: true,
	  [cls.disabled]: disabled,
  };

  return (
    <button
      type="button"
      className={classNames(cls.Button, mods, [className, cls[theme]])}
      disabled={disabled}
      {...props}
    >
      { children }
    </button>
  );
};
