import { Link } from "react-router-dom";

function ServiceCard({ id, name, image }) {
    return (
        <Link to={`/service/${id}`}
            class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
            <img src={image} loading="lazy" alt="Photo by Minh Pham" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

            <div
                class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
            </div>

            <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">{name}</span>
        </Link>
    );
}

export default ServiceCard;