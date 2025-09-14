"use client"
import React, { useContext, useState } from 'react'
import { ThemeProvider as NextThemesProvider } from "next-themes"

function Provider({ children, ...props }) {

    return (

        <NextThemesProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange

            {...props}>
            {children}</NextThemesProvider>

    )
}

export default Provider

export const useTheme = () => {
    return useContext(ThemeContext);
}