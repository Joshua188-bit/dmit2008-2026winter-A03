// NOTE: While 'children' is an automatic/protected keyword, if we're taking specific input props via destructuring,
//       we still have to name it as something we specifically want.
//       Without destructuring, you could just   ComponentWrapper(props)   and access children via props.chilren

export default function ComponentWrapper({ textColor, children }) {
    return <div style={{color: textColor}}>
        {/* Calling {children} here simply tells the component to render any nested ("child") nodes */}
        {children}
    </div>
}
