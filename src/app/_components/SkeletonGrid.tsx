import { Skeleton } from "./skeleton";

export function SkeletonGrid() {
  return (
    <div className="mx-auto flex h-[400px] flex-wrap justify-center gap-6">
      {Array.from({ length: 8 }).map((_, index) => (
        <div className="flex flex-col items-center space-y-3" key={index}>
          <Skeleton className="h-[145px] w-[250px] rounded-xl" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
            <Skeleton className="h-4 w-[200px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
      ))}
    </div>
  );
}
