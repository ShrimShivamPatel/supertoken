'use client';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { forwardRef } from 'react';
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

/*
  Addtional functionalites added on shadcn are:-
  
  -loading spinner when isLoading set true 
  -by default disabled when loading
  -disabled functionality
  -icon -> adjustable to left & right 
  -can take children 
  -Ref is provided via props
  -themes are added. 
*/

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground shadow-xs hover:bg-primary/90',
        destructive:
          'bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40',
        outline: 'border border-input bg-background shadow-xs hover:bg-accent hover:text-accent-foreground',
        secondary: 'bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
        // extra colors added
        Gray: 'bg-black text-white border-black hover:bg-gray-900',
        clear: 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50 border',
        invisible: 'bg-white text-gray-700 border-none shadow-none hover:bg-gray-50',
        tableInline: 'bg-white text-gray-700 border-none shadow-none hover:bg-none',
        Slate: 'bg-slate-900 text-white border-slate-900 hover:bg-slate-500',
        Red: 'bg-red-600 text-white border-red-600 hover:bg-red-500',
        Orange: 'bg-orange-600 text-white border-orange-600 hover:bg-orange-500',
        Amber: 'bg-amber-600 text-white border-amber-600 hover:bg-amber-500',
        Yellow: 'bg-yellow-600 text-white border-yellow-600 hover:bg-yellow-500',
        Lime: 'bg-lime-600 text-white border-lime-600 <hover:bg-lime-50></hover:bg-lime-50>0',
        Green: 'bg-green-600 text-white border-green-600 hover:bg-green-500',
        Emerald: 'bg-emerald-600 text-white border-emerald-600 hover:bg-emerald-500',
        Teal: 'bg-teal-600 text-white border-teal-600 hover:bg-teal-500',
        Cyan: 'bg-cyan-600 text-white border-cyan-600 hover:bg-cyan-500',
        primary: 'bg-sky-600 text-white border-sky-600 hover:bg-sky-500',
        Sky: 'bg-sky-600 text-white border-sky-600 hover:bg-sky-500',
        Blue: 'bg-blue-600 text-white border-blue-600 hover:bg-blue-500',
        Indigo: 'bg-indigo-600 text-white border-indigo-600 hover:bg-indigo-500',
        Violet: 'bg-violet-600 text-white border-violet-600 hover:bg-violet-500',
        Purple: 'bg-purple-600 text-white border-purple-600 hover:bg-purple-500',
        Fuchsia: 'bg-fuchsia-600 text-white border-fuchsia-600 hover:bg-fuchsia-500',
        Pink: 'bg-pink-600 text-white border-pink-600 hover:bg-pink-500',
        Rose: 'bg-rose-600 text-white border-rose-600 hover:bg-rose-500',
      },
      size: {
        default: 'h-9 px-4 py-2 has-[>svg]:px-3',
        sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
        lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
        icon: 'size-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

function ShadCNButton({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : 'button';

  return <Comp data-slot="button" className={cn(buttonVariants({ variant, size, className }))} {...props} />;
}

export { ShadCNButton, buttonVariants };

//--------------------Wrapper code --------------------------------------

type CustomButtonProps = React.ComponentProps<typeof ShadCNButton> & {
  className?: string;
  isLoading?: boolean;
  disabled?: boolean;
  icon?: React.ElementType;
  iconPosition?: 'left' | 'right';
  children?: React.ReactNode;
  asChild?: boolean;
};

export const Button = forwardRef<HTMLButtonElement, CustomButtonProps>(
  ({ asChild, className, isLoading, disabled, icon: Icon, iconPosition = 'left', children, ...props }, ref) => {
    const isDisabled = disabled || isLoading;
    return (
      <ShadCNButton
        ref={ref}
        className={cn(
          isDisabled ? 'opacity-50 cursor-not-allowed' : '',
          'inline-flex items-center justify-center gap-2',
          className,
        )}
        disabled={isDisabled}
        {...props}
      >
        {isLoading && <Loader2 className="w-4 h-4 animate-spin" />}
        {Icon && iconPosition === 'left' && <Icon className="w-4 h-4" />}
        {children}
        {Icon && iconPosition === 'right' && <Icon className="w-4 h-4" />}
      </ShadCNButton>
    );
  },
);

Button.displayName = 'button';

//------------------------Test cases from my-side ---------------------------------------
/*
      
    -> inline peroperty checked 

      Button variant="destructive">Delete</Button>
      <Button
        variant="outline"
        onClick={() => {
          console.log('clicked');
        }}
      >
        Outline
      </Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>


    -> passing children and apply button-css to them (shadcn property) - done 
      <div className="m-2">
        <Button asChild variant="secondary" className="hover:bg-gray-300">
          <a href="https://example.com">Go to Example</a>
        </Button>
      </div>

    -> onclick - done 
      <div className="m-2">
        <Button
          variant="Emerald"
          onClick={() => {
            console.log('clicked');
          }}
        >
          Green
        </Button>
      </div>


    -> disabled when isLoading - done che
      <div className="m-2">
        <Button
          onClick={() => {
            console.log('clicked');
          }}
          isLoading
        >
          Please wait
        </Button>
      </div>

     -> passing icon prop and size 
      <div className="m-2">
        <Button
          icon={Trash}
          variant="Orange"
          iconPosition="right"
          size="sm"
          onClick={() => {
            console.log('deleted');
          }}
        >
          Delete
        </Button>
      </div>
      
      -> default icon position is left 
      <div className="m-2">
        <Button
          icon={Trash}
          variant="Violet"
          // iconPosition="left" 
          size="lg"
          onClick={() => {
            console.log('deleted');
          }}
        >
          Delete
        </Button>
      </div>

     ->  default size
      <div className="m-2">
        <Button
          icon={Trash}
          variant="Blue"
          iconPosition="left"
          // size="sm"
          onClick={() => {
            console.log('deleted');
          }}
        >
          Delete
        </Button>
      </div> 
*/
