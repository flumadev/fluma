export default function Card({ title, children }: { title: string, children: string[] | string }) {
    return (
        <div class="bg-white border-2 border-black p-8 rounded-3xl shadow h-full">
            <div class="inline-flex items-center justify-between w-full font-semibold">
                <h2 class="text-3xl justify-between tracking-tight">{title}</h2>
            </div>
            <p class="lg:text-base text-sm tracking-wide mt-8">
                {children}
            </p>
        </div>
    )
}