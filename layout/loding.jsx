export const Loading = () => {
    return (
        <div class="flex flex-row gap-2 place-content-center mt-48">
            <div class="w-4 h-4 rounded-full bg-white animate-bounce"></div>
            <div class="w-4 h-4 rounded-full bg-white animate-bounce [animation-delay:-.3s]"></div>
            <div class="w-4 h-4 rounded-full   bg-white animate-bounce [animation-delay:-.5s]"></div>
        </div>
    )
}