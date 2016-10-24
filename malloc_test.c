#include<stdio.h>
#include<stdlib.h>
struct ci
{
	char c;
	int a;
};

int main()
{
	struct ci ma;
	int i=0;
	struct ci *p=NULL,*pt=NULL;
	printf("sizeof(char)=%ld\tsizeof(int)=%ld\n",sizeof(char),sizeof(int));
    printf("struct\tsizeof(struct)=%ld\n",sizeof(ma));
	for(i=0;i<6;i++)
	{
		p=malloc(sizeof(ma));
		printf("p = %p\t",p);
		if(p!=NULL)
		{
			if(pt)
			printf("%ld\t",(int)p-(int)pt);
			printf("pt = %p\n",pt);
			pt=p;
//			free(p);
			p=NULL;
		}
	}
    printf("\n");
	return 0;		
}
