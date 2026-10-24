const visualStyles = {
  bottles: {
    background: 'bg-[#e8eee6]',
    items: (
      <>
        <span className="absolute bottom-8 left-[28%] h-24 w-12 rounded-t-xl rounded-b-md border border-[#d1d9cf] bg-[#faf9f4] shadow-sm">
          <span className="absolute -top-3 left-3 h-3 w-6 rounded-t bg-[#64766a]" />
          <span className="absolute inset-x-1 top-10 h-px bg-[#dce2d8]" />
        </span>
        <span className="absolute bottom-8 left-[48%] h-28 w-14 rounded-t-2xl rounded-b-md border border-[#d1d9cf] bg-[#f7f5ed] shadow-sm">
          <span className="absolute -top-3 left-4 h-3 w-6 rounded-t bg-[#8a9a82]" />
          <span className="absolute inset-x-1 top-12 h-px bg-[#dce2d8]" />
        </span>
        <span className="absolute bottom-8 left-[68%] h-20 w-11 rounded-t-xl rounded-b-md border border-[#d1d9cf] bg-[#fcfbf6] shadow-sm">
          <span className="absolute -top-3 left-3 h-3 w-5 rounded-t bg-[#64766a]" />
          <span className="absolute inset-x-1 top-9 h-px bg-[#dce2d8]" />
        </span>
        <span className="absolute bottom-6 left-[20%] h-3 w-[62%] rounded-full bg-[#c7d2c4]" />
      </>
    ),
  },
  box: {
    background: 'bg-[#eee9df]',
    items: (
      <>
        <span className="absolute bottom-10 left-[23%] h-28 w-32 -skew-y-3 rounded-md border border-[#ddd3c3] bg-[#f8f5ed] shadow-md" />
        <span className="absolute bottom-10 left-[51%] h-24 w-28 skew-y-3 rounded-md border border-[#d4c9b6] bg-[#e5ded1] shadow-md" />
        <span className="absolute bottom-10 left-[35%] h-1 w-10 bg-brand/60" />
        <span className="absolute bottom-16 left-[38%] text-xs font-medium tracking-[0.2em] text-brand">
          2+
        </span>
        <span className="absolute bottom-6 left-[18%] h-3 w-[65%] rounded-full bg-[#d8cdbb]" />
      </>
    ),
  },
  textiles: {
    background: 'bg-[#e6eceb]',
    items: (
      <>
        <span className="absolute bottom-10 left-[26%] h-24 w-40 rotate-[-8deg] rounded-lg border border-[#d5dfdc] bg-[#f9f8f3] shadow-sm" />
        <span className="absolute bottom-9 left-[39%] h-20 w-40 rotate-[7deg] rounded-lg border border-[#d1dcda] bg-[#dce7e3] shadow-sm" />
        <span className="absolute bottom-6 left-[20%] h-3 w-[65%] rounded-full bg-[#c4d2cf]" />
      </>
    ),
  },
}

function ProductVisual({ visual, className = '', children }) {
  const productVisual = visualStyles[visual] ?? {
    background: 'bg-[#e8eee6]',
    items: (
      <span className="absolute inset-0 grid place-items-center text-4xl font-semibold tracking-tight text-brand/70">
        2+
      </span>
    ),
  }

  return (
    <div
      aria-hidden="true"
      className={`relative overflow-hidden ${productVisual.background} ${className}`}
    >
      {productVisual.items}
      {children}
    </div>
  )
}

export default ProductVisual
