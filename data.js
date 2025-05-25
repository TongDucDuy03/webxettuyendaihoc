// Sample data for Vietnamese universities
const universities = [
    {
        name: "Đại học Kinh tế Quốc dân (NEU)",
        region: "Hà Nội",
        type: "Công lập",
        established: 1956,
        website: "neu.edu.vn",
        admissionMethods: [
            "Xét tuyển thẳng",
            "Xét tuyển theo điểm thi THPT",
            "Xét tuyển kết hợp"
        ],
        detailedInfo: {
            totalQuota: "Chỉ tiêu được phân bổ theo từng phương thức xét tuyển",
            admissionPeriod: "01/6/2025 - 30/6/2025 (đăng ký trực tuyến trên hệ thống NEU và Bộ GD&ĐT)",
            scoringNote: "Không có sự phân biệt điểm xét tuyển giữa các tổ hợp; các môn trong tổ hợp được tính hệ số 1.",
            methods: {
                "Xét tuyển thẳng": {
                    condition: "Theo quy định của Bộ Giáo dục và Đào tạo",
                    quota: "3% tổng chỉ tiêu"
                },
                "Xét tuyển theo điểm thi THPT": {
                    condition: "Sử dụng kết quả thi tốt nghiệp THPT năm 2025",
                    quota: "Phần còn lại",
                    scoring: "Tổng điểm 3 môn trong tổ hợp + điểm ưu tiên",
                    note: "Sử dụng 4 tổ hợp: A00 (Toán, Lý, Hóa), A01 (Toán, Lý, Anh), D01 (Toán, Văn, Anh), D07 (Toán, Hóa, Anh). Không có chênh lệch điểm giữa các tổ hợp"
                },
                "Xét tuyển kết hợp": {
                    condition: "Áp dụng cho 3 nhóm đối tượng:\n1. SAT ≥ 1200 hoặc ACT ≥ 26\n2. Chứng chỉ tiếng Anh (IELTS ≥ 5.5, TOEFL iBT ≥ 46, TOEIC 4 kỹ năng: L&R 785, S 160, W 150) + điểm thi THPT môn Toán và một môn khác\n3. Chứng chỉ tiếng Anh + điểm thi đánh giá năng lực (HSA ≥ 85, APT ≥ 700, TSA ≥ 60)",
                    quota: "83% tổng chỉ tiêu",
                    scoring: "Điểm quy đổi chứng chỉ tiếng Anh + (Điểm đánh giá năng lực × 30/150) × 2/3 + điểm ưu tiên",
                    note: "Không sử dụng kết quả miễn thi ngoại ngữ, điểm thi bảo lưu từ các năm trước, không cộng điểm ưu tiên chứng chỉ nghề"
                }
            }
        },
        majors: [
            { name: "Kinh tế học", code: "7310101_1", combinations: ["A00", "A01", "D01", "D07"] },
            { name: "Kinh tế và quản lý đô thị", code: "7310101_2", combinations: ["A00", "A01", "D01", "D07"] },
            { name: "Kinh tế và quản lý nguồn nhân lực", code: "7310101_3", combinations: ["A00", "A01", "D01", "D07"] },
            { name: "Kinh tế đầu tư", code: "7310104", combinations: ["A00", "A01", "D01", "D07"] },
            { name: "Kinh tế phát triển", code: "7310105", combinations: ["A00", "A01", "D01", "D07"] },
            { name: "Kinh tế quốc tế", code: "7310106", combinations: ["A00", "A01", "D01", "D07"] },
            { name: "Thống kê kinh tế", code: "7310107", combinations: ["A00", "A01", "D01", "D07"] },
            { name: "Toán kinh tế", code: "7310108", combinations: ["A00", "A01", "D01", "D07"] },
            { name: "Quan hệ công chúng", code: "7320108", combinations: ["A00", "A01", "D01", "D07"] },
            { name: "Ngôn ngữ Anh", code: "7220201", combinations: ["A00", "A01", "D01", "D07"] },
            { name: "Quản trị kinh doanh", code: "7340101", combinations: ["A00", "A01", "D01", "D07"] },
            { name: "Marketing", code: "7340115", combinations: ["A00", "A01", "D01", "D07"] },
            { name: "Bất động sản", code: "7340116", combinations: ["A00", "A01", "D01", "D07"] },
            { name: "Kinh doanh quốc tế", code: "7340120", combinations: ["A00", "A01", "D01", "D07"] },
            { name: "Kinh doanh thương mại", code: "7340121", combinations: ["A00", "A01", "D01", "D07"] },
            { name: "Thương mại điện tử", code: "7340122", combinations: ["A00", "A01", "D01", "D07"] },
            { name: "Tài chính - Ngân hàng", code: "7340201", combinations: ["A00", "A01", "D01", "D07"] },
            { name: "Bảo hiểm", code: "7340204", combinations: ["A00", "A01", "D01", "D07"] },
            { name: "Kế toán", code: "7340301", combinations: ["A00", "A01", "D01", "D07"] },
            { name: "Kiểm toán", code: "7340302", combinations: ["A00", "A01", "D01", "D07"] },
            { name: "Khoa học quản lý", code: "7340401", combinations: ["A00", "A01", "D01", "D07"] },
            { name: "Quản lý công", code: "7340403", combinations: ["A00", "A01", "D01", "D07"] },
            { name: "Quan hệ lao động (mới)", code: "7340408", combinations: ["A00", "A01", "D01", "D07"] },
            { name: "Luật thương mại quốc tế (mới)", code: "7380109", combinations: ["A00", "A01", "D01", "D07"] }
        ],
        note: "Các tổ hợp xét tuyển: A00 (Toán, Lý, Hóa), A01 (Toán, Lý, Anh), D01 (Toán, Văn, Anh), D07 (Toán, Hóa, Anh)."
    },
    {
        name: "Đại học Hải Phong",
        region: "Hải Phòng",
        type: "Tư thục",
        established: 1997,
        website: "hpu.edu.vn",
        admissionMethods: ["Xét tuyển học bạ", "Xét tuyển kết hợp", "Xét tuyển theo năng lực"]
    },
    {
        name: "Đại học Cần Thơ",
        region: "Cần Thơ",
        type: "Công lập",
        established: 1966,
        website: "ctu.edu.vn",
        admissionMethods: ["Xét tuyển theo điểm thi THPT", "Xét tuyển học bạ", "Xét tuyển kết hợp", "Xét tuyển thẳng"]
    },
    {
        name: "Đại học Tôn Đức Thắng",
        region: "TP.HCM",
        type: "Công lập",
        established: 1997,
        website: "tdtu.edu.vn",
        admissionMethods: ["Xét tuyển theo điểm thi THPT", "Xét tuyển học bạ", "Xét tuyển kết hợp", "Xét tuyển thẳng", "Xét tuyển tài năng"]
    },
    {
        name: "Học viện Ngân hàng",
        region: "Hà Nội",
        type: "Công lập",
        established: 1963,
        website: "hvnh.edu.vn",
        admissionMethods: [
            "Xét tuyển thẳng",
            "Xét tuyển học bạ",
            "Xét tuyển chứng chỉ quốc tế",
            "Xét tuyển đánh giá năng lực",
            "Xét tuyển theo điểm thi THPT"
        ],
        detailedInfo: {
            admissionPeriod: "05/6/2025 - 15/6/2025 (đăng ký trực tuyến), 16/7 - 28/7/2025 (đăng ký trên hệ thống BGD&ĐT)",
            methods: {
                "Xét tuyển thẳng": {
                    condition: "Theo quy định của Bộ Giáo dục và Đào tạo",
                    quota: "Theo quy định"
                },
                "Xét tuyển học bạ": {
                    condition: "Tốt nghiệp THPT 2024-2025, học lực lớp 12 loại Giỏi, điểm TB 3 năm các môn xét tuyển ≥ 8.0",
                    quota: "20% tổng chỉ tiêu",
                    scoring: "Chuẩn: ((M1×2+M2+M3)×3)/4 + ưu tiên | CLC: ((M1×2+M2×2+M3)×3)/5 + ưu tiên"
                },
                "Xét tuyển chứng chỉ quốc tế": {
                    condition: "Học lực lớp 12 loại Giỏi, điểm TB 3 năm ≥ 8.0, có chứng chỉ: SAT ≥1200, IELTS ≥6.0, TOEFL iBT ≥72",
                    quota: "15% tổng chỉ tiêu",
                    scoring: "Điểm chứng chỉ quy đổi × 3 + ưu tiên"
                },
                "Xét tuyển đánh giá năng lực": {
                    condition: "V-SAT: tổng điểm 3 môn ≥300 | HSA: điểm HSA ≥85",
                    quota: "Theo kế hoạch",
                    scoring: "V-SAT: (M1+M2+M3)×hệ số + ưu tiên | HSA: Điểm quy đổi×3 + ưu tiên"
                },
                "Xét tuyển theo điểm thi THPT": {
                    condition: "Tổng điểm 3 môn đạt ngưỡng đảm bảo chất lượng (sẽ công bố sau)",
                    quota: "Phần còn lại",
                    scoring: "Chuẩn: ((M1×2+M2+M3)×3)/4 + ưu tiên | CLC: ((M1×2+M2×2+M3)×3)/5 + ưu tiên"
                }
            }
        },
        majors: [
            { name: "Tài chính – Ngân hàng", code: "7340201", combinations: ["A00", "A01", "D01", "D07"] },
            { name: "Kế toán", code: "7340301", combinations: ["A00", "A01", "D01", "D07"] },
            { name: "Quản trị kinh doanh", code: "7340101", combinations: ["A00", "A01", "D01", "D07"] },
            { name: "Hệ thống thông tin quản lý", code: "7340405", combinations: ["A00", "A01", "D01", "D07"] },
            { name: "Kinh doanh quốc tế", code: "7340120", combinations: ["A00", "A01", "D01", "D07"] },
            { name: "Ngôn ngữ Anh", code: "7220201", combinations: ["A01", "D01", "D09", "D14"] },
            { name: "Luật kinh tế", code: "7380107", combinations: ["A00", "A01", "D01", "D07"] },
            { name: "Kinh tế đầu tư (chương trình chất lượng cao)", code: "7310101", combinations: ["A00", "A01", "D01", "D07"] },
            { name: "Kế toán (chương trình chất lượng cao)", code: "7340301", combinations: ["A00", "A01", "D01", "D07"] },
            { name: "Tài chính – Ngân hàng (chương trình chất lượng cao)", code: "7340201", combinations: ["A00", "A01", "D01", "D07"] },
            { name: "Quản trị kinh doanh (chương trình chất lượng cao)", code: "7340101", combinations: ["A00", "A01", "D01", "D07"] },
            { name: "Hệ thống thông tin quản lý (chương trình chất lượng cao)", code: "7340405", combinations: ["A00", "A01", "D01", "D07"] },
            { name: "Kinh doanh quốc tế (chương trình chất lượng cao)", code: "7340120", combinations: ["A00", "A01", "D01", "D07"] }
        ],
        note: "Các tổ hợp xét tuyển: A00 (Toán, Lý, Hóa), A01 (Toán, Lý, Anh), D01 (Toán, Văn, Anh), D07 (Toán, Hóa, Anh), D09 (Toán, Sử, Anh), D14 (Văn, Sử, Anh)"
    },
    {
        name: "Đại học Thương mại (TMU)",
        region: "Hà Nội",
        type: "Công lập",
        established: 1956,
        website: "tmu.edu.vn",
        admissionMethods: [
            "Xét tuyển thẳng", "Xét tuyển theo điểm thi THPT", "Xét tuyển đánh giá năng lực",
            "Xét tuyển đánh giá tư duy", "Xét tuyển kết hợp quốc tế", "Xét tuyển kết hợp HSG"
        ],
        detailedInfo: {
            totalQuota: "5.320 chỉ tiêu cho 45 chương trình đào tạo",
            admissionPeriod: "05/6/2025 - 15/6/2025 (đăng ký trực tuyến TMU), 16/7 - 28/7/2025 (đăng ký trên hệ thống BGD&ĐT)",
            scoringNote: "Tất cả phương thức quy đổi về thang điểm 30",
            methods: {
                "Xét tuyển thẳng": {
                    condition: "Theo quy định BGD&ĐT và quy định riêng của trường",
                    methodCode: "301"
                },
                "Xét tuyển theo điểm thi THPT": {
                    condition: "Sử dụng điểm thi các tổ hợp môn phù hợp với ngành đăng ký",
                    methodCode: "100",
                    scoring: "Tổng điểm 3 môn trong tổ hợp + điểm ưu tiên + điểm thưởng"
                },
                "Xét tuyển đánh giá năng lực": {
                    condition: "Kết quả thi ĐGNL do ĐHQG Hà Nội tổ chức",
                    methodCode: "402",
                    scoring: "(Điểm ĐGNL × 30/150) × Ka + điểm ưu tiên + điểm thưởng"
                },
                "Xét tuyển đánh giá tư duy": {
                    condition: "Kết quả thi ĐGTD do ĐH Bách khoa Hà Nội tổ chức",
                    methodCode: "402",
                    scoring: "(Điểm ĐGTD × 30/100) × Kb + điểm ưu tiên + điểm thưởng"
                },
                "Xét tuyển kết hợp quốc tế": {
                    condition: "Áp dụng cho chương trình định hướng quốc tế, tiên tiến, song bằng",
                    scoring: "Điểm TB 3 năm (Toán + môn không phải ngoại ngữ) + điểm quy đổi chứng chỉ ngoại ngữ + điểm ưu tiên + điểm thưởng"
                },
                "Xét tuyển kết hợp HSG": {
                    condition: "Thí sinh đạt giải Nhất, Nhì, Ba trong kỳ thi HSG cấp tỉnh/thành phố",
                    scoring: "Tổng điểm 3 môn trong tổ hợp + điểm ưu tiên + điểm thưởng"
                }
            }
        },
        majors: [
            { name: "Kinh tế", code: "7310101", combinations: ["A00", "A01", "D01", "D07", "D09", "D10", "D84"] },
            { name: "Kinh tế quốc tế", code: "7310106", combinations: ["A00", "A01", "D01", "D07", "D09", "D10", "D84"] },
            { name: "Quản trị kinh doanh", code: "7340101", combinations: ["A00", "A01", "D01", "D07", "D09", "D10", "D84"] },
            { name: "Marketing", code: "7340115", combinations: ["A00", "A01", "D01", "D07", "D09", "D10", "D84"] },
            { name: "Kế toán", code: "7340301", combinations: ["A00", "A01", "D01", "D07", "D09", "D10", "D84"] },
            { name: "Tài chính – Ngân hàng", code: "7340201", combinations: ["A00", "A01", "D01", "D07", "D09", "D10", "D84"] },
            { name: "Kinh doanh thương mại", code: "7340121", combinations: ["A00", "A01", "D01", "D07", "D09", "D10", "D84"] },
            { name: "Kinh doanh quốc tế (CLC)", code: "7310106", combinations: ["A00", "A01", "D01", "D07", "D09", "D10", "D84"] },
            { name: "Quản trị khách sạn", code: "7810201", combinations: ["A00", "A01", "D01", "D07", "D09", "D10", "D84"] },
            { name: "Quản trị dịch vụ du lịch và lữ hành", code: "7810103", combinations: ["A00", "A01", "D01", "D07", "D09", "D10", "D84"] },
            { name: "Hệ thống thông tin quản lý", code: "7340405", combinations: ["A00", "A01", "D01", "D07", "D09", "D10", "D84"] },
            { name: "Thương mại điện tử", code: "7340122", combinations: ["A00", "A01", "D01", "D07", "D09", "D10", "D84"] },
            { name: "Luật kinh tế", code: "7380107", combinations: ["A00", "A01", "D01", "D07", "D09", "D10", "D84"] },
            { name: "Ngôn ngữ Anh", code: "7220201", combinations: ["A01", "D01", "D09", "D10", "D84"] },
            { name: "Quản trị nhân lực", code: "7340404", combinations: ["A00", "A01", "D01", "D07", "D09", "D10", "D84"] },
            { name: "Quản trị dịch vụ du lịch và lữ hành (CLC)", code: "7810103", combinations: ["A00", "A01", "D01", "D07", "D09", "D10", "D84"] },
            { name: "Marketing (CLC)", code: "7340115", combinations: ["A00", "A01", "D01", "D07", "D09", "D10", "D84"] },
            { name: "Quản trị khách sạn (CLC)", code: "7810201", combinations: ["A00", "A01", "D01", "D07", "D09", "D10", "D84"] },
            { name: "Kế toán (CLC)", code: "7340301", combinations: ["A00", "A01", "D01", "D07", "D09", "D10", "D84"] },
            { name: "Tài chính – Ngân hàng (CLC)", code: "7340201", combinations: ["A00", "A01", "D01", "D07", "D09", "D10", "D84"] },
            { name: "Quản trị kinh doanh (CLC)", code: "7340101", combinations: ["A00", "A01", "D01", "D07", "D09", "D10", "D84"] },
            { name: "Thương mại điện tử (CLC)", code: "7340122", combinations: ["A00", "A01", "D01", "D07", "D09", "D10", "D84"] },
            { name: "Kinh doanh quốc tế (CLC)", code: "7310106", combinations: ["A00", "A01", "D01", "D07", "D09", "D10", "D84"] },
            { name: "Quản trị nhân lực (CLC)", code: "7340404", combinations: ["A00", "A01", "D01", "D07", "D09", "D10", "D84"] },
            { name: "Luật kinh tế (CLC)", code: "7380107", combinations: ["A00", "A01", "D01", "D07", "D09", "D10", "D84"] }
        ],
        note: "Các tổ hợp xét tuyển: A00 (Toán, Lý, Hóa), A01 (Toán, Lý, Anh), D01 (Toán, Văn, Anh), D07 (Toán, Hóa, Anh), D09 (Toán, Sử, Anh), D10 (Toán, Địa, Anh), D84 (Toán, GD Kinh tế & Pháp luật, Anh)"
    },
    {
        name: "Học viện Báo chí và Tuyên truyền (AJC)",
        region: "Hà Nội",
        type: "Công lập",
        established: 1962,
        website: "ajc.edu.vn",
        admissionMethods: ["Xét tuyển học bạ", "Xét tuyển kết hợp", "Xét tuyển theo điểm thi THPT", "Xét tuyển thẳng"],
        detailedInfo: {
            totalQuota: "Chỉ tiêu được phân bổ theo từng phương thức xét tuyển",
            admissionPeriod: "Tháng 5/2025 (xét học bạ và xét tuyển kết hợp), 16/7 - 28/7/2025 (xét tuyển theo điểm thi THPT)",
            scoringNote: "Điểm xét tuyển được quy đổi về thang điểm 30 hoặc 40 tùy nhóm ngành",
            methods: {
                "Xét tuyển học bạ": {
                    condition: "Xét điểm trung bình 6 học kỳ của 3 môn trong tổ hợp xét tuyển",
                    quota: "20% tổng chỉ tiêu",
                    scoring: "[(Điểm TB môn 1) + (Điểm TB môn 2) + (Điểm TB môn 3 × hệ số)] + điểm ưu tiên",
                    note: "Môn nhân hệ số 2 tùy nhóm ngành: Nhóm 1 (Báo chí, Xuất bản): Ngữ văn, Nhóm 3 (Lịch sử): Lịch sử, Nhóm 4 (Truyền thông, PR): Tiếng Anh"
                },
                "Xét tuyển kết hợp": {
                    condition: "Điểm TB học bạ 6 học kỳ ≥ 7.0, IELTS ≥ 6.5 hoặc SAT ≥ 1200/1600, hạnh kiểm Tốt",
                    quota: "30% tổng chỉ tiêu",
                    scoring: "[(Điểm TB môn 1) + (Điểm TB môn 2) + (Điểm quy đổi chứng chỉ tiếng Anh × 2)] + điểm ưu tiên",
                    note: "Quy đổi về thang điểm 40"
                },
                "Xét tuyển theo điểm thi THPT": {
                    condition: "Sử dụng điểm thi các tổ hợp môn phù hợp với ngành đăng ký",
                    quota: "50% tổng chỉ tiêu",
                    scoring: "Tổng điểm 3 môn trong tổ hợp + điểm ưu tiên",
                    note: "Có thể quy đổi điểm chứng chỉ tiếng Anh quốc tế (IELTS ≥ 5.0) thay thế điểm môn tiếng Anh"
                },
                "Xét tuyển thẳng": {
                    condition: "Theo quy định của Bộ Giáo dục và Đào tạo",
                    quota: "Theo quy định"
                }
            }
        },
        majors: [
            { name: "Báo chí", code: "7320101", combinations: ["D01", "D14", "D15", "D96"] },
            { name: "Xuất bản", code: "7320401", combinations: ["D01", "D14", "D15", "D96"] },
            { name: "Chính trị học", code: "7310201", combinations: ["D01", "D14", "D15", "D96"] },
            { name: "Chủ nghĩa xã hội khoa học", code: "7229008", combinations: ["D01", "D14", "D15", "D96"] },
            { name: "Xây dựng Đảng và chính quyền nhà nước", code: "7310202", combinations: ["D01", "D14", "D15", "D96"] },
            { name: "Tư tưởng Hồ Chí Minh", code: "7310203", combinations: ["D01", "D14", "D15", "D96"] },
            { name: "Lịch sử Đảng Cộng sản Việt Nam", code: "7310204", combinations: ["D01", "D14", "D15", "D96"] },
            { name: "Triết học", code: "7229001", combinations: ["D01", "D14", "D15", "D96"] },
            { name: "Kinh tế chính trị", code: "7310102", combinations: ["D01", "D14", "D15", "D96"] },
            { name: "Xã hội học", code: "7310301", combinations: ["D01", "D14", "D15", "D96"] },
            { name: "Lịch sử", code: "7229010", combinations: ["D01", "D14", "D15", "D96"] },
            { name: "Truyền thông đại chúng", code: "7320104", combinations: ["D01", "D14", "D15", "D96"] },
            { name: "Quảng cáo", code: "7320110", combinations: ["D01", "D14", "D15", "D96"] },
            { name: "Quan hệ công chúng", code: "7320115", combinations: ["D01", "D14", "D15", "D96"] },
            { name: "Truyền thông quốc tế", code: "7320116", combinations: ["D01", "D14", "D15", "D96"] },
            { name: "Truyền thông đa phương tiện", code: "7320117", combinations: ["D01", "D14", "D15", "D96"] }
            ],
        note: "Các tổ hợp xét tuyển: D01 (Toán, Ngữ văn, Tiếng Anh), D14 (Ngữ văn, Lịch sử, Tiếng Anh), D15 (Ngữ văn, Địa lý, Tiếng Anh), D96 (Ngữ văn, Tiếng Anh, Tin học). Môn chính trong tổ hợp được nhân hệ số 2 tùy theo nhóm ngành."
        },
    {
        name: "Đại học Hà Nội (HANU)",
        region: "Hà Nội",
        type: "Công lập",
        established: 1959,
        website: "hanu.vn",
        admissionMethods: ["Xét tuyển thẳng", "Xét tuyển theo điểm thi THPT", "Xét tuyển kết hợp"],
        detailedInfo: {
            totalQuota: "Chỉ tiêu được phân bổ theo từng phương thức xét tuyển",
            admissionPeriod: "16/7 - 28/7/2025 (đăng ký nguyện vọng), 29/7 - 5/8/2025 (nộp lệ phí), 13/6 - 19/6/2025 (xét tuyển kết hợp)",
            scoringNote: "Điểm ngoại ngữ được nhân hệ số 2 trong tất cả các phương thức",
            methods: {
                "Xét tuyển thẳng": {
                    condition: "Theo quy định của Bộ Giáo dục và Đào tạo",
                    quota: "3% tổng chỉ tiêu"
                },
                "Xét tuyển theo điểm thi THPT": {
                    condition: "Sử dụng kết quả thi tốt nghiệp THPT năm 2025",
                    quota: "Phần còn lại",
                    scoring: "(Điểm Toán + Điểm Ngữ văn + Điểm Ngoại ngữ × 2 + Điểm ưu tiên) × 4/3",
                    note: "Ngành CNTT: (Điểm Toán + Điểm Vật lý/Ngữ văn/Tin học + Điểm tiếng Anh × 2 + Điểm ưu tiên) × 4/3"
                },
                "Xét tuyển kết hợp": {
                    condition: "Chứng chỉ ngoại ngữ quốc tế (IELTS, TOEFL, HSK, JLPT...) kết hợp với kết quả học tập THPT hoặc điểm thi THPT",
                    quota: "Áp dụng cho chương trình CLC, tiên tiến và đào tạo bằng tiếng nước ngoài",
                    scoring: "Theo quy định riêng cho từng chương trình"
                }
            }
        },
        majors: [
            { name: "Ngôn ngữ Anh", code: "7220201", combinations: ["D01"] },
            { name: "Ngôn ngữ Anh (Chương trình tiên tiến)", code: "7220201 TT", combinations: ["D01"] },
            { name: "Ngôn ngữ Nga", code: "7220202", combinations: ["D01", "D02", "D03"] },
            { name: "Ngôn ngữ Pháp", code: "7220203", combinations: ["D01", "D03"] },
            { name: "Ngôn ngữ Trung Quốc", code: "7220204", combinations: ["D01", "D04"] },
            { name: "Ngôn ngữ Trung Quốc (Chương trình tiên tiến)", code: "7220204 TT", combinations: ["D01", "D04"] },
            { name: "Ngôn ngữ Đức", code: "7220205", combinations: ["D01", "D05"] },
            { name: "Ngôn ngữ Tây Ban Nha", code: "7220206", combinations: ["D01"] },
            { name: "Ngôn ngữ Bồ Đào Nha", code: "7220207", combinations: ["D01", "D04"] },
            { name: "Ngôn ngữ Italia", code: "7220208", combinations: ["D01"] },
            { name: "Ngôn ngữ Italia (Chương trình tiên tiến)", code: "7220208 TT", combinations: ["D01"] },
            { name: "Ngôn ngữ Nhật", code: "7220209", combinations: ["D01", "D06"] },
            { name: "Ngôn ngữ Hàn Quốc", code: "7220210", combinations: ["D01", "D04", "DD2"] },
            { name: "Ngôn ngữ Hàn Quốc (Chương trình tiên tiến)", code: "7220210 TT", combinations: ["D01", "D04", "DD2"] },
            { name: "Nghiên cứu phát triển", code: "7310111", combinations: ["D01"] },
            { name: "Quốc tế học", code: "7310601", combinations: ["D01"] },
            { name: "Marketing (dạy bằng tiếng Anh)", code: "7340115", combinations: ["D01"] },
            { name: "Tài chính – Ngân hàng (dạy bằng tiếng Anh)", code: "7340201", combinations: ["D01"] },
            { name: "Kế toán (dạy bằng tiếng Anh)", code: "7340301", combinations: ["D01"] },
            { name: "Công nghệ thông tin (dạy bằng tiếng Anh)", code: "7480201", combinations: ["D01", "A01", "Toán – Tin học – Tiếng Anh"] },
            { name: "Công nghệ thông tin (Chương trình tiên tiến)", code: "7480201 TT", combinations: ["D01", "A01", "Toán – Tin học – Tiếng Anh"] },
            { name: "Quản trị dịch vụ du lịch và lữ hành (dạy bằng tiếng Anh)", code: "7810103", combinations: ["D01"] },
            { name: "Quản trị dịch vụ du lịch và lữ hành (Chương trình tiên tiến)", code: "7810103 TT", combinations: ["D01"] },
            { name: "Công nghệ tài chính (dạy bằng tiếng Anh)", code: "7340205", combinations: ["D01", "A01"] },
            { name: "Tiếng Việt và Văn hóa Việt Nam (dành cho người nước ngoài)", code: "7220101", combinations: ["Xét học bạ"] }
        ],
        note: "Các tổ hợp xét tuyển: D01 (Toán, Văn, Anh), D02 (Toán, Văn, Nga), D03 (Toán, Văn, Pháp), D04 (Toán, Văn, Trung), D05 (Toán, Văn, Đức), D06 (Toán, Văn, Nhật), DD2 (Toán, Văn, Hàn), A01 (Toán, Lý, Anh). Môn Ngoại ngữ nhân hệ số 2."
    },
    {
        name: "Đại học Ngoại ngữ - ĐHQGHN (ULIS)",
        region: "Hà Nội",
        type: "Công lập",
        established: 1955,
        website: "ulis.vnu.edu.vn",
        admissionMethods: ["Xét tuyển thẳng", "Xét tuyển theo điểm thi THPT", "Xét tuyển kết hợp chứng chỉ", "Xét tuyển theo ĐGNL", "Xét tuyển kết hợp học bạ"],
        detailedInfo: {
            totalQuota: "Chỉ tiêu được phân bổ theo từng phương thức xét tuyển",
            admissionPeriod: "16/7 - 28/7/2025 (đăng ký nguyện vọng), 29/7 - 5/8/2025 (nộp lệ phí), trước 30/6/2025 (xét tuyển thẳng)",
            scoringNote: "Điểm xét tuyển được quy về thang điểm 30, môn ngoại ngữ nhân hệ số 2",
            methods: {
                "Xét tuyển thẳng": {
                    condition: "Theo quy định của Bộ Giáo dục và Đào tạo",
                    quota: "Theo quy định",
                    deadline: "Trước 17h00 ngày 30/6/2025"
                },
                "Xét tuyển theo điểm thi THPT": {
                    condition: "Sử dụng điểm thi của 3 môn trong tổ hợp xét tuyển",
                    quota: "Phần còn lại",
                    scoring: "[(Điểm môn 1 + Điểm môn 2 + (Điểm Ngoại ngữ × 2)) / 4 × 3] + điểm thưởng + điểm ưu tiên"
                },
                "Xét tuyển kết hợp chứng chỉ": {
                    condition: "Chứng chỉ ngoại ngữ quốc tế (IELTS, TOEFL) kết hợp với điểm thi THPT",
                    quota: "Theo kế hoạch",
                    scoring: "Điểm chứng chỉ quy đổi (nhân hệ số 2) + điểm 2 môn còn lại",
                    note: "Ví dụ: IELTS 5.5 = 8.5 điểm, IELTS 7.0-9.0 = 10 điểm"
                },
                "Xét tuyển theo ĐGNL": {
                    condition: "Điểm thi ĐGNL của ĐHQGHN, điểm hợp phần Tiếng Anh ≥ 30/50",
                    quota: "Theo kế hoạch",
                    scoring: "Điểm quy đổi về thang điểm 30"
                },
                "Xét tuyển kết hợp học bạ": {
                    condition: "Học sinh trường THPT chuyên hoặc lớp chuyên cấp tỉnh/thành phố",
                    quota: "Theo kế hoạch",
                    scoring: "Điểm chứng chỉ quốc tế (×2) + điểm TB 6 học kỳ của 2 môn còn lại"
                }
            }
        },
        majors: [
            { name: "Sư phạm Tiếng Anh", code: "7140231", combinations: ["D01", "D14", "D15", "D07", "D08", "A01"] },
            { name: "Sư phạm Tiếng Trung Quốc", code: "7140234", combinations: ["D01", "D04", "D14", "D15", "D07", "D08", "A01"] },
            { name: "Sư phạm Tiếng Nhật", code: "7140236", combinations: ["D01", "D06", "D14", "D15", "D07", "D08", "A01"] },
            { name: "Sư phạm Tiếng Hàn Quốc", code: "7140237", combinations: ["D01", "D14", "D15", "D07", "D08", "A01", "DD2"] },
            { name: "Ngôn ngữ Anh", code: "7220201", combinations: ["D01", "D14", "D15", "D07", "D08", "A01"] },
            { name: "Ngôn ngữ Nga", code: "7220202", combinations: ["D01", "D02", "D14", "D15", "D07", "D08", "A01"] },
            { name: "Ngôn ngữ Pháp", code: "7220203", combinations: ["D01", "D03", "D14", "D15", "D07", "D08", "A01"] },
            { name: "Ngôn ngữ Trung Quốc", code: "7220204", combinations: ["D01", "D04", "D14", "D15", "D07", "D08", "A01"] },
            { name: "Ngôn ngữ Đức", code: "7220205", combinations: ["D01", "D05", "D14", "D15", "D07", "D08", "A01"] },
            { name: "Ngôn ngữ Nhật", code: "7220209", combinations: ["D01", "D06", "D14", "D15", "D07", "D08", "A01"] },
            { name: "Ngôn ngữ Hàn Quốc", code: "7220210", combinations: ["D01", "D14", "D15", "D07", "D08", "A01", "DD2"] },
            { name: "Ngôn ngữ Ả Rập", code: "7220211", combinations: ["D01", "D14", "D15", "D07", "D08", "A01"] },
            { name: "Văn hóa truyền thông xuyên quốc gia", code: "7220212", combinations: ["D01", "D14", "D15", "D07", "D08", "A01"] },
            { name: "Tiếng Việt và Văn hóa Việt Nam (dành cho người nước ngoài)", code: "7220101", combinations: ["Xét học bạ"] }
        ],
        note: "Các tổ hợp xét tuyển: D01 (Toán, Văn, Anh), D02 (Toán, Văn, Nga), D03 (Toán, Văn, Pháp), D04 (Toán, Văn, Trung), D05 (Toán, Văn, Đức), D06 (Toán, Văn, Nhật), D07 (Toán, Hóa, Anh), D08 (Toán, Sinh, Anh), D14 (Văn, Sử, Anh), D15 (Văn, Địa, Anh), A01 (Toán, Lý, Anh), DD2 (Toán, Văn, Hàn). Môn Ngoại ngữ nhân hệ số 2."
    },
    {
        name: "Đại học Ngoại thương (FTU)",
        region: "Hà Nội",
        type: "Công lập",
        established: 1960,
        website: "https://ftu.edu.vn",
        admissionMethods: ["Xét tuyển thẳng", "Xét tuyển học bạ", "Xét tuyển theo điểm thi THPT", "Xét tuyển theo ĐGNL"],
        detailedInfo: {
            totalQuota: "Chỉ tiêu được phân bổ theo từng phương thức xét tuyển",
            admissionPeriod: "16/7 - 28/7/2025 (đăng ký xét tuyển), 22/8/2025 (công bố kết quả)",
            methods: {
                "Xét tuyển thẳng": {
                    condition: "Theo quy định của Bộ Giáo dục và Đào tạo",
                    quota: "Theo quy định"
                },
                "Xét tuyển học bạ": {
                    condition: "Thí sinh có thành tích học tập xuất sắc, đáp ứng điều kiện đảm bảo chất lượng của nhà trường",
                    quota: "Theo kế hoạch",
                    scoring: "Trung bình cộng điểm 3 môn trong tổ hợp xét tuyển (làm tròn đến 1 chữ số thập phân)"
                },
                "Xét tuyển theo điểm thi THPT": {
                    condition: "Sử dụng kết quả thi tốt nghiệp THPT năm 2025",
                    quota: "Phần còn lại",
                    scoring: "Tổng điểm 3 môn trong tổ hợp xét tuyển + điểm ưu tiên"
                },
                "Xét tuyển theo ĐGNL": {
                    condition: "Sử dụng kết quả kỳ thi đánh giá năng lực (HSA của ĐHQGHN hoặc APT của ĐHQG-HCM)",
                    quota: "Theo kế hoạch",
                    scoring: "Điểm quy đổi từ kỳ thi đánh giá năng lực về thang điểm 30 + điểm ưu tiên"
                }
            }
        },
        majors: [
            { name: "Kinh tế (Kinh tế đối ngoại, Thương mại quốc tế)", combinations: ["A00", "A01", "D01", "D07"] },
            { name: "Kinh tế quốc tế", combinations: ["A00", "A01", "D01", "D07"] },
            { name: "Kinh doanh quốc tế", combinations: ["A00", "A01", "D01", "D07"] },
            { name: "Quản trị kinh doanh", combinations: ["A00", "A01", "D01", "D07"] },
            { name: "Tài chính quốc tế", combinations: ["A00", "A01", "D01", "D07"] },
            { name: "Kế toán – Kiểm toán", combinations: ["A00", "A01", "D01", "D07"] },
            { name: "Luật thương mại quốc tế", combinations: ["A00", "A01", "D01", "D07"] },
            { name: "Ngôn ngữ thương mại (Tiếng Anh)", combinations: ["D01"] },
            { name: "Ngôn ngữ thương mại (Tiếng Pháp)", combinations: ["D03"] },
            { name: "Ngôn ngữ thương mại (Tiếng Trung)", combinations: ["D04"] },
            { name: "Ngôn ngữ thương mại (Tiếng Nhật)", combinations: ["D06"] },
            { name: "Ngôn ngữ thương mại (Tiếng Nga)", combinations: ["D02"] }
        ],
        trainingPrograms: [
            "Chương trình tiêu chuẩn",
            "Chương trình chất lượng cao (CLC)",
            "Chương trình tiên tiến",
            "Chương trình định hướng nghề nghiệp quốc tế (ĐHNNQT)"
        ],
        otherCombinations: [
            "Q00: Đánh giá năng lực ĐHQGHN"
        ]
    },
    {
        name: "Học viện Tài chính (AOF)",
        region: "Hà Nội",
        type: "Công lập",
        established: 1963,
        website: "hvtc.edu.vn",
        admissionMethods: ["Xét tuyển thẳng", "Xét tuyển năng lực vượt trội", "Xét tuyển theo điểm thi THPT", "Xét tuyển kết hợp"],
        detailedInfo: {
            totalQuota: "Chỉ tiêu được phân bổ theo từng phương thức xét tuyển",
            admissionPeriod: "16/7 - 28/7/2025 (đăng ký), 23/7/2025 (công bố điểm sàn), 29/7 - 5/8/2025 (nộp lệ phí), 16/8 - 20/8/2025 (lọc ảo), 30/8/2025 (xác nhận nhập học đợt 1)",
            methods: {
                "Xét tuyển thẳng": {
                    condition: "Theo quy định của Bộ Giáo dục và Đào tạo",
                    quota: "Theo quy định"
                },
                "Xét tuyển năng lực vượt trội": {
                    condition: "Đạt giải Nhất, Nhì kỳ thi HSG cấp tỉnh/thành phố (Toán, Lý, Hóa, Tin, Anh, Văn) hoặc có chứng chỉ quốc tế (IELTS ≥ 7.0, TOEFL iBT ≥ 95, SAT ≥ 1450)",
                    quota: "Theo kế hoạch",
                    scoring: "30 + (Điểm TB học tập lớp 10 + 11 + 12) / 3"
                },
                "Xét tuyển theo điểm thi THPT": {
                    condition: "Sử dụng kết quả thi tốt nghiệp THPT năm 2025",
                    quota: "Phần còn lại",
                    scoring: "Theo tổ hợp môn xét tuyển"
                },
                "Xét tuyển kết hợp": {
                    condition: "Kết hợp điểm thi THPT và điểm TB học tập 3 năm THPT",
                    quota: "Theo kế hoạch",
                    scoring: "Điểm môn 1 (×2) + Điểm môn 2 + Điểm môn 3",
                    note: "Môn 1: Tiếng Anh (chương trình quốc tế/Ngôn ngữ Anh) hoặc Toán (các ngành khác)\nMôn 2: Lý/Hóa/Văn/Toán hoặc Tiếng Anh\nMôn 3: Điểm TB học tập 3 năm THPT (≥ 8.0)"
                }
            }
        },
        majors: [
            { name: "Ngôn ngữ Anh", code: "7220201", combinations: ["A01", "D01", "D07"] },
            { name: "Kinh tế", code: "7310101", combinations: ["A01", "D01", "D07"] },
            { name: "Quản trị kinh doanh", code: "7340101", combinations: ["A00", "A01", "D01", "D07"] },
            { name: "Kế toán", code: "7340301", combinations: ["A00", "A01", "D01", "D07"] },
            { name: "Hệ thống thông tin quản lý", code: "7340405", combinations: ["A00", "A01", "D01", "D07"] },
            { name: "Tài chính – Ngân hàng 1", code: "73402011", combinations: ["A00", "A01", "D01", "D07"] },
            { name: "Tài chính – Ngân hàng 2", code: "73402012", combinations: ["A00", "A01", "D01", "D07"] },
            { name: "Tài chính – Ngân hàng 3", code: "73402013", combinations: ["A00", "A01", "D01", "D07"] },
            { name: "Hải quan và Logistics (định hướng FIATA)", code: "7340201C06", combinations: ["A01", "D01", "D07"] },
            { name: "Phân tích tài chính (định hướng ICAEW)", code: "7340201C09", combinations: ["A01", "D01", "D07"] },
            { name: "Tài chính doanh nghiệp (định hướng ACCA)", code: "7340201C11", combinations: ["A01", "D01", "D07"] },
            { name: "Marketing", code: "7340115", combinations: ["A00", "A01", "D01", "D07"] },
            { name: "Công nghệ thông tin", code: "7480201", combinations: ["A00", "A01"] },
            { name: "Khoa học dữ liệu trong tài chính", code: "7340117", combinations: ["A00", "A01"] },
            { name: "Trí tuệ nhân tạo trong tài chính – kế toán", code: "7340118", combinations: ["A00", "A01"] },
            { name: "Kinh tế chính trị – tài chính", code: "7310102", combinations: ["A01", "D01", "D07"] },
            { name: "Luật", code: "7380101", combinations: ["A00", "A01", "D01", "D07"] },
            { name: "Toán tài chính", code: "7340119", combinations: ["A00", "A01"] },
            { name: "Quản lý công", code: "7340403", combinations: ["A00", "A01", "D01", "D07"] },
            { name: "Bảo hiểm", code: "7340204", combinations: ["A00", "A01", "D01", "D07"] },
            { name: "Bất động sản", code: "7340116", combinations: ["A00", "A01", "D01", "D07"] },
            { name: "Kiểm toán", code: "7340302", combinations: ["A00", "A01", "D01", "D07"] }
        ],
        note: "Đối với ngành Ngôn ngữ Anh và các chương trình định hướng chứng chỉ quốc tế, điểm môn Tiếng Anh có thể được nhân hệ số 2 trong quá trình xét tuyển."
    },
    {
        name: "Học viện Ngoại giao (DAV)",
        region: "Hà Nội",
        type: "Công lập",
        established: 1959,
        website: "dav.edu.vn",
        admissionMethods: [
            "Xét tuyển thẳng",
            "Xét tuyển kết hợp học bạ",
            "Xét tuyển kết hợp điểm thi THPT",
            "Xét tuyển theo điểm thi THPT"
        ],
        detailedInfo: {
            totalQuota: "Chỉ tiêu được phân bổ theo từng phương thức xét tuyển",
            admissionPeriod: "Theo thông báo của Học viện (dav.edu.vn)",
            methods: {
                "Xét tuyển thẳng": {
                    condition: "Theo quy định của Bộ Giáo dục và Đào tạo",
                    quota: "Theo quy định"
                },
                "Xét tuyển kết hợp học bạ": {
                    condition: "Điểm TB 6 học kỳ ≥ 8.0 và có chứng chỉ quốc tế (IELTS, TOEFL iBT, SAT, ACT)",
                    quota: "Theo kế hoạch",
                    scoring: "A + B + C + D",
                    note: "A: Điểm quy đổi chứng chỉ quốc tế\nB: Tổng điểm TB 2 môn (có Toán/Văn) trong 6 học kỳ\nC: Điểm khuyến khích HSG\nD: Điểm ưu tiên"
                },
                "Xét tuyển kết hợp điểm thi THPT": {
                    condition: "Tham dự kỳ thi THPT 2025 và có chứng chỉ quốc tế",
                    quota: "Theo kế hoạch",
                    scoring: "A + B + C + D",
                    note: "A: Điểm quy đổi chứng chỉ quốc tế\nB: Tổng điểm 2 môn thi (có Toán/Văn)\nC: Điểm khuyến khích HSG\nD: Điểm ưu tiên"
                },
                "Xét tuyển theo điểm thi THPT": {
                    condition: "Sử dụng kết quả thi tốt nghiệp THPT năm 2025",
                    quota: "Phần còn lại",
                    scoring: "A + B + C",
                    note: "A: Tổng điểm 3 môn thi\nB: Điểm khuyến khích HSG\nC: Điểm ưu tiên"
                }
            }
        },
        majors: [
            { name: "Quan hệ quốc tế", code: "7310206", combinations: ["A00", "A01", "C00", "D01", "D03", "D04", "D06", "D07", "D09", "D10", "D14", "D15"] },
            { name: "Kinh tế quốc tế", code: "7310106", combinations: ["A00", "A01", "C00", "D01", "D03", "D04", "D06", "D07", "D09", "D10", "D14", "D15"] },
            { name: "Luật quốc tế", code: "7380108", combinations: ["A00", "A01", "C00", "D01", "D03", "D04", "D06", "D07", "D09", "D10", "D14", "D15"] },
            { name: "Truyền thông quốc tế", code: "7320107", combinations: ["A00", "A01", "C00", "D01", "D03", "D04", "D06", "D07", "D09", "D10", "D14", "D15"] },
            { name: "Ngôn ngữ Anh", code: "7220201", combinations: ["A00", "A01", "C00", "D01", "D03", "D04", "D06", "D07", "D09", "D10", "D14", "D15"] },
            { name: "Ngôn ngữ Trung Quốc", code: "7220204", combinations: ["A00", "A01", "C00", "D01", "D03", "D04", "D06", "D07", "D09", "D10", "D14", "D15"] },
            { name: "Ngôn ngữ Pháp", code: "7220203", combinations: ["A00", "A01", "C00", "D01", "D03", "D04", "D06", "D07", "D09", "D10", "D14", "D15"] },
            { name: "Ngôn ngữ Nhật Bản", code: "7220209", combinations: ["A00", "A01", "C00", "D01", "D03", "D04", "D06", "D07", "D09", "D10", "D14", "D15"] }
        ],
        note: "Các tổ hợp xét tuyển: A00 (Toán, Lý, Hóa), A01 (Toán, Lý, Anh), C00 (Văn, Sử, Địa), D01 (Toán, Văn, Anh), D03 (Toán, Văn, Pháp), D04 (Toán, Văn, Trung), D06 (Toán, Văn, Nhật), D07 (Toán, Hóa, Anh), D09 (Toán, Anh, Sử), D10 (Toán, Anh, Địa), D14 (Văn, Sử, Anh), D15 (Văn, Địa, Anh). Năm 2025 bổ sung thêm D09, D10, D14, D15."
    },
    {
        name: "Đại học Giao thông Vận tải (UTC)",
        region: "Hà Nội",
        type: "Công lập",
        established: 1960,
        website: "utc.edu.vn",
        admissionMethods: ["Xét tuyển theo điểm thi THPT", "Xét tuyển học bạ", "Xét tuyển theo ĐGNL", "Xét tuyển theo ĐGTD"],
        detailedInfo: {
            totalQuota: "6.340 chỉ tiêu",
            admissionPeriod: "1/7 - 20/7/2025 (đăng ký), 4/6/2025 (công bố kết quả xét tuyển), 20/6/2025 (công bố kết quả thi), 22/8 - 27/8/2025 (xác nhận nhập học), 6/9 - 8/9/2025 (nhập học), 9/9/2025 (khai giảng)",
            methods: {
                "Xét tuyển theo điểm thi THPT": {
                    condition: "Sử dụng kết quả thi tốt nghiệp THPT năm 2025",
                    quota: "Phần lớn chỉ tiêu",
                    scoring: "(Điểm Toán × 2) + Điểm môn 2 + Điểm môn 3 + Điểm ưu tiên",
                    note: "Điểm môn Toán được nhân hệ số 2 trong tất cả tổ hợp"
                },
                "Xét tuyển học bạ": {
                    condition: "Sử dụng kết quả học tập 6 học kỳ THPT",
                    quota: "Theo kế hoạch",
                    scoring: "(Điểm TB Toán × 2) + Điểm TB môn 2 + Điểm TB môn 3",
                    note: "Điểm TB từng môn mỗi năm ≥ 5.5"
                },
                "Xét tuyển theo ĐGNL": {
                    condition: "Kết quả ĐGNL 2025 của ĐHQGHN hoặc ĐHQG-HCM",
                    quota: "Áp dụng cho các ngành tại Hà Nội và TP.HCM",
                    scoring: "Theo quy định của từng trường",
                    note: "Điểm từ 80% thang điểm trở lên"
                },
                "Xét tuyển theo ĐGTD": {
                    condition: "Kết quả ĐGTD 2024-2025 của ĐH Bách khoa Hà Nội",
                    quota: "Áp dụng cho một số ngành tại Hà Nội",
                    scoring: "Theo quy định của ĐH Bách khoa",
                    note: "Điểm từ 80% thang điểm trở lên"
                }
            }
        },
        majors: [
            { name: "Kỹ thuật cơ điện tử", code: "7520114", combinations: ["A00", "A01", "D01", "GT1"] },
            { name: "Kỹ thuật cơ khí", code: "7520103", combinations: ["A00", "A01", "D01", "GT1"] },
            { name: "Kỹ thuật cơ khí động lực", code: "7520116", combinations: ["A00", "A01", "D01", "GT1"] },
            { name: "Kỹ thuật nhiệt", code: "7520115", combinations: ["A00", "A01", "D01", "GT1"] },
            { name: "Kỹ thuật ô tô", code: "7520130", combinations: ["A00", "A01", "D01", "GT1"] },
            { name: "Kỹ thuật xây dựng công trình giao thông", code: "7580205", combinations: ["A00", "A01", "D01", "GT1"] },
            { name: "Kỹ thuật xây dựng công trình thủy", code: "7580202", combinations: ["A00", "A01", "D01", "GT1"] },
            { name: "Quản lý đô thị và công trình", code: "7580110", combinations: ["A00", "A01", "D01", "GT1"] },
            { name: "Kỹ thuật cơ sở hạ tầng", code: "7580210", combinations: ["A00", "A01", "D01", "GT1"] },
            { name: "Hệ thống giao thông thông minh", code: "7520218", combinations: ["A00", "A01", "D01", "GT1"] },
            { name: "Kỹ thuật điện", code: "7520201", combinations: ["A00", "A01", "D01", "GT1"] },
            { name: "Kỹ thuật điện tử - Viễn thông", code: "7520207", combinations: ["A00", "A01", "D01", "GT1"] },
            { name: "Kỹ thuật điều khiển và tự động hóa", code: "7520216", combinations: ["A00", "A01", "D01", "GT1"] },
            { name: "Kỹ thuật robot & trí tuệ nhân tạo", code: "7520218", combinations: ["A00", "A01", "D01", "GT1"] },
            { name: "Công nghệ thông tin", code: "7480201", combinations: ["A00", "A01", "D01", "GT1"] },
            { name: "Khoa học máy tính", code: "7480101", combinations: ["A00", "A01", "D01", "GT1"] },
            { name: "Toán ứng dụng", code: "7460112", combinations: ["A00", "A01", "D01", "GT1"] },
            { name: "Kỹ thuật xây dựng", code: "7580201", combinations: ["A00", "A01", "D01", "GT1"] },
            { name: "Công nghệ kỹ thuật giao thông", code: "7510104", combinations: ["A00", "A01", "D01", "GT1"] },
            { name: "Kỹ thuật môi trường", code: "7520320", combinations: ["A00", "A01", "D01", "GT1"] },
            { name: "Kinh tế xây dựng", code: "7580301", combinations: ["A00", "A01", "D01", "GT1"] },
            { name: "Quản lý xây dựng", code: "7580302", combinations: ["A00", "A01", "D01", "GT1"] },
            { name: "Kế toán", code: "7340301", combinations: ["A00", "A01", "D01", "GT1"] },
            { name: "Khai thác vận tải", code: "7840101", combinations: ["A00", "A01", "D01", "GT1"] },
            { name: "Kinh tế", code: "7310101", combinations: ["A00", "A01", "D01", "GT1"] },
            { name: "Kinh tế vận tải", code: "7840104", combinations: ["A00", "A01", "D01", "GT1"] },
            { name: "Logistics và Quản lý chuỗi cung ứng", code: "7510605", combinations: ["A00", "A01", "D01", "GT1"] },
            { name: "Quản trị dịch vụ du lịch và lữ hành", code: "7810103", combinations: ["A00", "A01", "D01", "GT1"] },
            { name: "Quản trị kinh doanh", code: "7340101", combinations: ["A00", "A01", "D01", "GT1"] },
            { name: "Tài chính ngân hàng", code: "7340201", combinations: ["A00", "A01", "D01", "GT1"] },
            { name: "Kiến trúc", code: "7580101", combinations: ["A00", "A01", "D01", "GT1"] },
            { name: "Kỹ thuật máy tính", code: "7480108", combinations: ["A00", "A01", "D01", "GT1"] },
            { name: "Ngôn ngữ Anh", code: "7220201", combinations: ["A00", "A01", "D01", "GT1"] }
        ],
        note: "Các tổ hợp xét tuyển: A00 (Toán, Lý, Hóa), A01 (Toán, Lý, Anh), D01 (Toán, Văn, Anh), GT1 (Toán, Lý, Tin học - mới từ 2025)."
    },
    {
        name: "Học viện Công nghệ Bưu chính Viễn thông (PTIT)",
        region: "Hà Nội",
        type: "Công lập",
        established: 1997,
        website: "ptit.edu.vn",
        admissionMethods: [
            "Xét tuyển tài năng", "Xét tuyển thẳng", "Xét hồ sơ năng lực", "Xét tuyển theo chứng chỉ quốc tế", "Xét tuyển theo ĐGNL/ĐGTD", "Xét tuyển kết hợp IELTS/TOEFL", "Xét tuyển theo điểm thi THPT"
        ],
        detailedInfo: {
            totalQuota: "Chỉ tiêu được phân bổ theo từng phương thức xét tuyển",
            admissionPeriod: "Tháng 3 - 7/2025 (xét tuyển sớm), tháng 7-8/2025 (xét theo điểm THPT)",
            methods: {
                "Xét tuyển tài năng": {
                    condition: "Đoạt giải Nhất, Nhì, Ba HSG Quốc gia, Quốc tế (Toán, Lý, Hóa, Tin, Anh, Văn)",
                    quota: "Theo quy định"
                },
                "Xét hồ sơ năng lực": {
                    condition: "Một trong các điều kiện:\n- HSG cấp tỉnh (Nhất, Nhì, Ba, KK)\n- Học sinh trường chuyên (điểm TB lớp 10-12 ≥ 7.5, hạnh kiểm Khá trở lên)",
                    quota: "Theo kế hoạch",
                    scoring: "(Điểm học lực × 60%) + (Điểm thành tích × 40%) + Điểm ưu tiên"
                },
                "Xét tuyển theo chứng chỉ quốc tế": {
                    condition: "SAT ≥ 1130/1600 hoặc ACT ≥ 25/36 (còn hạn 2 năm)",
                    quota: "Theo kế hoạch",
                    scoring: "Điểm SAT/ACT + Điểm cộng + Điểm ưu tiên"
                },
                "Xét tuyển theo ĐGNL/ĐGTD": {
                    condition: "Một trong các điều kiện:\n- ĐGNL ĐHQG TP.HCM (APT) ≥ 600 điểm\n- ĐGNL ĐHQG Hà Nội (HSA) ≥ 75 điểm\n- ĐGTD Bách khoa Hà Nội (TSA) ≥ 50 điểm\n- ĐGNL Sư phạm Hà Nội (SPT) ≥ 15 điểm",
                    quota: "Theo kế hoạch",
                    scoring: "Điểm thi ĐGNL/ĐGTD + Điểm cộng + Điểm ưu tiên"
                },
                "Xét tuyển kết hợp IELTS/TOEFL": {
                    condition: "IELTS ≥ 5.5 hoặc TOEFL iBT ≥ 65 và điểm TB lớp 10-12 ≥ 7.5 (3 môn tổ hợp)",
                    quota: "Theo kế hoạch",
                    scoring: "(ĐTB môn 1 + ĐTB môn 2 + ĐTB môn 3) + Điểm quy đổi IELTS + Điểm ưu tiên",
                    note: "Điểm IELTS có thể thay thế điểm môn Tiếng Anh trong tổ hợp"
                },
                "Xét tuyển theo điểm thi THPT": {
                    condition: "Sử dụng kết quả thi tốt nghiệp THPT năm 2025",
                    quota: "Phần còn lại",
                    scoring: "Điểm môn 1 + Điểm môn 2 + Điểm môn 3 + Điểm ưu tiên",
                    note: "Điểm cộng: 1-3 điểm cho thí sinh có giải HSG"
                }
            }
        },
        majors: [
            { name: "Công nghệ thông tin", code: "7480201", combinations: ["A00", "A01", "D01", "X06", "X26"] },
            { name: "Công nghệ thông tin (chất lượng cao)", code: "7480201_CLC", combinations: ["A00", "A01", "D01", "X06", "X26"] },
            { name: "Công nghệ thông tin (định hướng ứng dụng)", code: "7480201_UDU", combinations: ["A00", "A01", "D01", "X06", "X26"] },
            { name: "Công nghệ thông tin Việt – Nhật", code: "7480201_VNH", combinations: ["A00", "A01", "D01", "X06", "X26"] },
            { name: "An toàn thông tin", code: "7480202", combinations: ["A00", "A01", "D01", "X06", "X26"] },
            { name: "An toàn thông tin (chất lượng cao)", code: "7480202_CLC", combinations: ["A00", "A01", "D01", "X06", "X26"] },
            { name: "Khoa học máy tính (định hướng Khoa học dữ liệu)", code: "7480101", combinations: ["A00", "A01", "D01", "X06", "X26"] },
            { name: "Mạng máy tính và truyền thông dữ liệu", code: "7480102", combinations: ["A00", "A01", "D01", "X06", "X26"] },
            { name: "Trí tuệ nhân tạo", code: "7480107", combinations: ["A00", "A01", "D01", "X06", "X26"] },
            { name: "Kỹ thuật Điện tử viễn thông", code: "7520207", combinations: ["A00", "A01", "D01", "X06", "X26"] },
            { name: "Kỹ thuật Điều khiển và Tự động hóa", code: "7520216", combinations: ["A00", "A01", "D01", "X06", "X26"] },
            { name: "Công nghệ kỹ thuật Điện, điện tử", code: "7510301", combinations: ["A00", "A01", "D01", "X06", "X26"] },
            { name: "Công nghệ kỹ thuật Điện, điện tử (Vi mạch bán dẫn)", code: "7510301_VM", combinations: ["A00", "A01", "D01", "X06", "X26"] },
            { name: "Công nghệ đa phương tiện", code: "7329001", combinations: ["A00", "A01", "D01", "X06", "X26"] },
            { name: "Thiết kế và phát triển Game", code: "7329001_GAM", combinations: ["A00", "A01", "D01", "X06", "X26"] },
            { name: "Truyền thông đa phương tiện", code: "7320104", combinations: ["A00", "A01", "D01", "X06", "X26"] },
            { name: "Truyền thông đa phương tiện (chất lượng cao)", code: "7320104_CLC", combinations: ["A00", "A01", "D01", "X06", "X26"] },
            { name: "Báo chí", code: "7320101", combinations: ["A00", "A01", "D01", "X06", "X26"] },
            { name: "Marketing", code: "7340115", combinations: ["A00", "A01", "D01", "X06", "X26"] },
            { name: "Marketing (chất lượng cao)", code: "7340115_CLC", combinations: ["A00", "A01", "D01", "X06", "X26"] },
            { name: "Quan hệ công chúng", code: "7340115_QHC", combinations: ["A00", "A01", "D01", "X06", "X26"] },
            { name: "Quản trị kinh doanh", code: "7340101", combinations: ["A00", "A01", "D01", "X06", "X26"] },
            { name: "Logistics và Quản lý chuỗi cung ứng", code: "7340101_LG", combinations: ["A00", "A01", "D01", "X06", "X26"] },
            { name: "Kế toán", code: "7340301", combinations: ["A00", "A01", "D01", "X06", "X26"] },
            { name: "Kế toán (chuẩn quốc tế ACCA)", code: "7340301_CLC", combinations: ["A00", "A01", "D01", "X06", "X26"] },
            { name: "Thương mại điện tử", code: "7340122", combinations: ["A00", "A01", "D01", "X06", "X26"] },
            { name: "Công nghệ tài chính (Fintech)", code: "7340205", combinations: ["A00", "A01", "D01", "X06", "X26"] }
        ],
        note: "Các tổ hợp xét tuyển: A00 (Toán, Lý, Hóa), A01 (Toán, Lý, Anh), D01 (Toán, Văn, Anh), X06 (Toán, Lý, Tin học), X26 (Toán, Tin học, Anh). Năm 2025 bổ sung X06 và X26."
    },
    {
        name: "Đại học Sư phạm Hà Nội 2 (SP2)",
        region: "Vĩnh Phúc",
        type: "Công lập",
        established: 1967,
        website: "hpu2.edu.vn",
        admissionMethods: [
            "Xét tuyển thẳng", "Xét tuyển học bạ", "Xét tuyển theo điểm thi THPT", "Xét tuyển kết hợp"
        ],
        detailedInfo: {
            totalQuota: "Chỉ tiêu được phân bổ theo từng phương thức xét tuyển",
            admissionPeriod: "Theo thông báo của trường",
            methods: {
                "Xét tuyển theo điểm thi THPT": {
                    condition: "Sử dụng kết quả thi tốt nghiệp THPT năm 2025",
                    methodCode: "PT100",
                    scoring: "Điểm Môn 1 + Điểm Môn 2 + Điểm Môn 3 + Điểm ưu tiên"
                },
                "Xét tuyển kết hợp năng khiếu": {
                    condition: "Áp dụng cho ngành Giáo dục Mầm non, Giáo dục Thể chất, Quản lý TDTT",
                    methodCode: "PT405",
                    scoring: "Điểm bài thi đánh giá năng lực + Điểm thi năng khiếu + Điểm ưu tiên",
                    note: "Điểm thi năng khiếu: thang điểm 20 (Mầm non) hoặc 30 (Thể chất, TDTT)"
                },
                "Xét tuyển theo kỳ thi độc lập": {
                    condition: "Tham dự kỳ thi độc lập của trường",
                    methodCode: "PT401",
                    scoring: "Điểm Môn 1 + Điểm Môn 2 + Điểm Môn 3 + Điểm ưu tiên"
                },
                "Xét tuyển học bạ": {
                    condition: "Sử dụng kết quả học tập THPT",
                    methodCode: "PT200",
                    scoring: "Trung bình cộng điểm học tập (Môn 1 + Môn 2 + Môn 3) + Điểm ưu tiên"
                },
                "Xét tuyển theo ĐGNL": {
                    condition: "Sử dụng kết quả thi đánh giá năng lực",
                    methodCode: "PT402",
                    scoring: "Ngành Mầm non: Điểm ĐGNL + Điểm năng khiếu + Điểm ưu tiên\nCác ngành khác: Điểm ĐGNL + Điểm ưu tiên"
                },
                "Xét tuyển thẳng": {
                    condition: "Theo quy định của Bộ Giáo dục và Đào tạo",
                    methodCode: "PT301",
                    quota: "Theo quy định"
                },
                "Xét tuyển dự bị đại học": {
                    condition: "Học sinh hoàn thành chương trình dự bị đại học",
                    methodCode: "PT301-DB",
                    quota: "Theo quy định"
                }
            }
        },
        majors: [
            { name: "Giáo dục Mầm non", code: "7140201", combinations: ["M01", "M09", "M26", "M05"] },
            { name: "Giáo dục Tiểu học", code: "7140202", combinations: ["D01", "A01", "A00", "C04", "Q00"] },
            { name: "Giáo dục Công dân", code: "7140204", combinations: ["D01", "C00", "D66", "C19", "Q00"] },
            { name: "Giáo dục Thể chất", code: "7140206", combinations: ["T00", "T01", "T02", "T03"] },
            { name: "Giáo dục Quốc phòng và An ninh", code: "7140208", combinations: ["C00", "D01", "D66", "C19"] },
            { name: "Sư phạm Toán học", code: "7140209", combinations: ["A00", "A01", "D01", "D07"] },
            { name: "Sư phạm Tin học", code: "7140210", combinations: ["A00", "A01", "D01", "D07"] },
            { name: "Sư phạm Vật lý", code: "7140211", combinations: ["A00", "A01", "D01", "D07"] },
            { name: "Sư phạm Hóa học", code: "7140212", combinations: ["A00", "B00", "D07", "D08"] },
            { name: "Sư phạm Sinh học", code: "7140213", combinations: ["B00", "D08", "D07", "D01"] },
            { name: "Sư phạm Ngữ văn", code: "7140217", combinations: ["C00", "D01", "D14", "D15"] },
            { name: "Sư phạm Lịch sử", code: "7140218", combinations: ["C00", "D01", "D14", "D15"] },
            { name: "Sư phạm Địa lý", code: "7140219", combinations: ["C00", "D01", "D14", "D15"] },
            { name: "Sư phạm Tiếng Anh", code: "7140231", combinations: ["D01", "D14", "D15", "D66"] },
            { name: "Sư phạm Khoa học Tự nhiên", code: "7140247", combinations: ["A00", "B00", "D07", "D08"] },
            { name: "Sư phạm Lịch sử - Địa lý", code: "7140249", combinations: ["C00", "D01", "D14", "D15"] },
            { name: "Công nghệ Thông tin", code: "7480201", combinations: ["A00", "A01", "D01", "D07"] },
            { name: "Kỹ thuật Hóa học", code: "7520301", combinations: ["A00", "B00", "D07", "D08"] },
            { name: "Khoa học Vật liệu", code: "7440122", combinations: ["A00", "A01", "D01", "D07"] },
            { name: "Công nghệ Sinh học", code: "7420201", combinations: ["B00", "D08", "D07", "D01"] },
            { name: "Toán ứng dụng", code: "7460112", combinations: ["A00", "A01", "D01", "D07"] },
            { name: "Ngôn ngữ Anh", code: "7220201", combinations: ["D01", "D14", "D15", "D66"] },
            { name: "Ngôn ngữ Trung Quốc", code: "7220204", combinations: ["D01", "D04", "D14", "D15"] },
            { name: "Việt Nam học", code: "7310630", combinations: ["C00", "D01", "D14", "D15"] },
            { name: "Tâm lý học giáo dục", code: "7310403", combinations: ["C00", "D01", "D14", "D15"] },
            { name: "Quản lý thể dục thể thao", code: "7810301", combinations: ["T00", "T01", "T02", "T03"] }
        ],
        note: "Các tổ hợp xét tuyển: A00 (Toán, Lý, Hóa), A01 (Toán, Lý, Anh), B00 (Toán, Hóa, Sinh), C00 (Văn, Sử, Địa), C04 (Văn, Toán, Địa), C19 (Văn, Sử, GDCD), D01 (Toán, Văn, Anh), D04 (Toán, Văn, Trung), D07 (Toán, Hóa, Anh), D08 (Toán, Sinh, Anh), D14 (Văn, Sử, Anh), D15 (Văn, Địa, Anh), D66 (Văn, GDCD, Anh), M01/M05/M09/M26 (Văn/Toán + Năng khiếu), Q00 (Văn, Toán, GDCD), T00/T01/T02/T03 (Toán/Văn/Anh/Sinh + Năng khiếu)."
    },
    {
        name: "Đại học Xây dựng Hà Nội (HUCE)",
        region: "Hà Nội",
        type: "Công lập",
        established: 1966,
        website: "huce.edu.vn",
        admissionMethods: [
            "Xét tuyển thẳng", "Xét tuyển học bạ", "Xét tuyển theo điểm thi THPT", "Xét tuyển kết hợp", "Xét tuyển đánh giá tư duy"
        ],
        detailedInfo: {
            totalQuota: "Chỉ tiêu được phân bổ theo từng phương thức xét tuyển",
            admissionPeriod: "Theo thông báo của trường",
            methods: {
                "Xét tuyển theo điểm thi THPT": {
                    condition: "Sử dụng kết quả thi tốt nghiệp THPT năm 2025",
                    quota: "Phần lớn chỉ tiêu",
                    scoring: "Tổng điểm 3 môn thi/bài thi theo tổ hợp + Điểm ưu tiên",
                    note: "Các ngành có môn Vẽ Mỹ thuật sử dụng kết quả thi môn Vẽ của Trường hoặc các trường khác (được quy đổi về thang điểm của Trường)"
                },
                "Xét tuyển học bạ": {
                    condition: "Áp dụng cho các ngành không có môn Vẽ Mỹ thuật",
                    quota: "Theo kế hoạch",
                    scoring: "Tổng điểm 3 môn theo tổ hợp + Điểm ưu tiên",
                    note: "Có thể sử dụng IELTS 5.5 trở lên thay thế môn Tiếng Anh"
                },
                "Xét tuyển theo ĐGTD/ĐGNL": {
                    condition: "Áp dụng cho các ngành không có môn Vẽ Mỹ thuật, bao gồm:\n- ĐGTD (TSA) 2024-2025 của ĐH Bách khoa Hà Nội\n- ĐGNL 2025 của ĐH Sư phạm Hà Nội\n- V-SAT 2025",
                    quota: "Theo kế hoạch",
                    scoring: "Tổng điểm các môn thi/bài thi theo tổ hợp + Điểm ưu tiên"
                },
                "Xét tuyển theo chứng chỉ quốc tế": {
                    condition: "Áp dụng cho các ngành không có môn Vẽ Mỹ thuật\nSAT ≥ 1200 hoặc ACT ≥ 26 (còn hiệu lực)",
                    quota: "Theo kế hoạch",
                    scoring: "Điểm quy đổi từ chứng chỉ + Điểm ưu tiên"
                },
                "Xét tuyển thẳng": {
                    condition: "Theo quy định của Bộ GD&ĐT và đề án của Trường\nĐạt giải Nhất, Nhì, Ba HSG cấp tỉnh/thành phố",
                    quota: "Theo quy định",
                    note: "Xét tuyển theo ngành/chuyên ngành phù hợp với môn đoạt giải"
                }
            },
            registrationLinks: {
                online: "https://xthb.huce.edu.vn",
                nguyenVong: "https://utxt.huce.edu.vn"
            }
        },
        majors: [
            { name: "Mỹ thuật đô thị", code: "7210110", combinations: ["H00", "H07", "V00", "V01", "V02"] },
            { name: "Quản lý dự án", code: "7340409", combinations: ["A00", "A01", "A10", "C01", "D01", "D07", "X06", "X26", "K00", "SP1", "SP2", "SP3", "SP4", "VS1", "VS2", "VS3", "VS4"] },
            { name: "Khoa học dữ liệu (mới)", code: "7460108", combinations: ["A00", "A01", "C01", "D01", "D07", "X06", "X26", "K00", "SP1", "SP2", "SP3", "SP4", "VS1", "VS2", "VS3", "VS4"] },
            { name: "Khoa học máy tính", code: "7480101", combinations: ["A00", "A01", "C01", "D01", "D07", "X06", "X26", "K00", "SP1", "SP2", "SP3", "SP4", "VS1", "VS2", "VS3", "VS4"] },
            { name: "Công nghệ thông tin", code: "7480201", combinations: ["A00", "A01", "C01", "D01", "D07", "X06", "X26", "K00", "SP1", "SP2", "SP3", "SP4", "VS1", "VS2", "VS3", "VS4"] },
            { name: "Công nghệ thông tin/ Công nghệ đa phương tiện", code: "7480201_01", combinations: ["A00", "A01", "C01", "D01", "D07", "X06", "X26", "K00", "SP1", "SP2", "SP3", "SP4", "VS1", "VS2", "VS3", "VS4"] },
            { name: "Công nghệ thông tin/ An toàn thông tin (mới)", code: "7480201_02", combinations: ["A00", "A01", "C01", "D01", "D07", "X06", "X26", "K00", "SP1", "SP2", "SP3", "SP4", "VS1", "VS2", "VS3", "VS4"] },
            { name: "Công nghệ Kỹ thuật Vật liệu xây dựng", code: "7510105", combinations: ["A00", "A01", "C01", "D01", "D07", "X06", "X26", "K00", "SP1", "SP2", "SP3", "SP4", "VS1", "VS2", "VS3", "VS4"] },
            { name: "Logistics và Quản lý chuỗi cung ứng", code: "7510605", combinations: ["A00", "A01", "C01", "D01", "D07", "X06", "X26", "K00", "SP1", "SP2", "SP3", "SP4", "VS1", "VS2", "VS3", "VS4"] }
    ],
    note: "Các tổ hợp xét tuyển: A00 (Toán, Lý, Hóa), A01 (Toán, Lý, Anh), A10 (Toán, Lý, GDCD), C01 (Văn, Toán, Lý), D01 (Toán, Văn, Anh), D07 (Toán, Hóa, Anh), H00 (Văn, Năng khiếu vẽ), H07 (Toán, Năng khiếu vẽ), V00 (Toán, Lý, Vẽ), V01 (Toán, Văn, Vẽ), V02 (Toán, Anh, Vẽ), X06 (Toán, Lý, Tin), X26 (Toán, Anh, Tin), K00 (Toán, Lý, Năng khiếu), SP1 (Toán, Lý, Hóa), SP2 (Toán, Lý, Anh), SP3 (Toán, Hóa, Anh), SP4 (Toán, Văn, Anh), VS1 (Toán, Lý, Anh), VS2 (Toán, Hóa, Anh), VS3 (Toán, Văn, Anh), VS4 (Toán, Anh, Tin)."
    },
    {
        name: "Đại học Luật Hà Nội",
        region: "Hà Nội",
        type: "Công lập",
        established: 1979,
        website: "hlu.edu.vn",
        admissionMethods: [
            "Xét tuyển thẳng",
            "Xét tuyển học bạ THPT",
            "Xét tuyển theo điểm thi THPT"
        ],
        detailedInfo: {
            totalQuota: "2.650 chỉ tiêu (2.350 tại Hà Nội, 300 tại Phân hiệu Đắk Lắk)",
            admissionPeriod: "16/7 – 28/7: Đăng ký nguyện vọng; 29/7 – 5/8: Nộp lệ phí; 16/8 – 20/8: Lọc ảo; Trước 17h30 30/8: Xác nhận nhập học; 1/9 – 12/2025: Xét bổ sung (nếu còn chỉ tiêu)",
            methods: {
                "Xét tuyển thẳng": {
                    condition: "Theo quy chế tuyển sinh đại học hiện hành của Bộ GD&ĐT",
                    quota: "Theo quy định"
                },
                "Xét tuyển học bạ THPT": {
                    condition: "Tốt nghiệp THPT năm 2025, sử dụng điểm trung bình các môn trong tổ hợp xét tuyển của cả năm lớp 10, 11, 12",
                    quota: "Theo kế hoạch",
                    scoring: "Điểm xét tuyển = (ĐTB môn 1 + ĐTB môn 2 + ĐTB môn 3) + ưu tiên"
                },
                "Xét tuyển theo điểm thi THPT": {
                    condition: "Sử dụng điểm thi các môn trong tổ hợp xét tuyển tương ứng với từng ngành",
                    quota: "Theo kế hoạch",
                    scoring: "Điểm xét tuyển = Tổng điểm 3 môn trong tổ hợp + ưu tiên"
                }
            }
        },
        majors: [
            { name: "Luật", code: "7380101", quota: 1400, combinations: ["A00", "A01", "C00", "D01", "D02", "D03", "D04", "D05", "D06"] },
            { name: "Luật Kinh tế", code: "7380107", quota: 550, combinations: ["A00", "A01", "C00", "D01", "D02", "D03", "D04", "D05", "D06"] },
            { name: "Luật Thương mại quốc tế", code: "7380109", quota: 200, combinations: ["A01", "D01"] },
            { name: "Ngôn ngữ Anh", code: "7220201", quota: 200, combinations: ["A01", "D01"] },
            { name: "Luật (Phân hiệu Đắk Lắk)", code: "7380101PH", quota: 300, combinations: ["A00", "A01", "C00", "D01", "D02", "D03", "D04", "D05", "D06"] }
        ],
        note: "Ngành Luật Thương mại quốc tế và Ngôn ngữ Anh không tuyển sinh tổ hợp C00 (Văn, Sử, Địa). Tổng chỉ tiêu 2025: 2.650 (2.350 tại Hà Nội, 300 tại Đắk Lắk)."
    }
];