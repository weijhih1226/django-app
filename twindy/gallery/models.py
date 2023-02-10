from django.db import models
from django.core.validators import RegexValidator

alphanumeric = RegexValidator(r"^[0-9a-zA-Z\-]*$", "僅允許輸入英數字及'-'符號。")

# Create your models here.
class ImageBlock(models.Model):
    block_name = models.CharField("區塊名稱" , max_length = 30 , help_text = "必填，僅允許英數字及'-'符號" , blank = False , null = False , validators = [alphanumeric])
    block_dname = models.CharField("區塊顯示名稱" , max_length = 30 , blank = True , null = True)
    block_display_order = models.IntegerField("區塊顯示順序" , help_text = "必填，不重複數字" , blank = False , null = False , unique = True)
    
    def __str__(self):
        return self.block_name


class ImageMetaData(models.Model):
    data_name = models.CharField("資料名稱" , help_text = "必填" , max_length = 30 , blank = False , null = False)
    data_dname = models.CharField("資料顯示名稱" , max_length = 30 , blank = True , null = True)
    data_ename = models.CharField("資料英文名稱" , max_length = 30 , blank = True , null = True)
    image_block = models.ForeignKey(ImageBlock , verbose_name = "資料區塊" , on_delete = models.CASCADE , blank = True , null = True , related_name = 'image')
    data_type1 = models.CharField("資料類別1" , help_text = "必填" , max_length = 30 , blank = False , null = False)
    data_type2 = models.CharField("資料類別2" , max_length = 30 , blank = True , null = True)
    data_dir = models.CharField("資料目錄" , max_length = 100 , blank = True , null = True)
    data_file = models.CharField("資料檔案名稱" , max_length = 100 , help_text = "年：%Y、月：%m、日：%d、時：%H、分：%M、秒：%S" , blank = True , null = True)
    data_delay = models.IntegerField("資料延遲" , help_text = "單位：分鐘" , blank = True , null = True)
    data_freq = models.IntegerField("資料間隔" , help_text = "單位：分鐘" , blank = True , null = True)
    data_lst = models.BooleanField("是否為地區時" , help_text = "時區：臺北" , blank = True , null = True)

    def __str__(self):
        return f"ID: {self.id} {self.data_name}"

